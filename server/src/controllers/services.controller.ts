import { Request, Response } from 'express';
import Service from '../models/Service';
import logger from '../utils/logger';
import { AuthRequest } from '../middleware/authMiddleware';
import { Types } from 'mongoose';

// @desc    Get all services (Public)
// @route   GET /api/services
// @access  Public
export const getServices = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as string;
    const featured = req.query.featured as string;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string || 'displayOrder';
    const sortOrder = req.query.sortOrder as string || 'asc';

    // Build query for active services only (public endpoint)
    let query: any = { isActive: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.isFeatured = true;
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    // Build sort object
    const sortObj: any = {};
    if (search) {
      sortObj.score = { $meta: 'textScore' };
    } else {
      sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }

    // Execute query with pagination
    const services = await Service.find(query)
      .select('-createdBy -updatedBy')
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit)
      .populate('relatedServices', 'title slug shortDescription category');

    const total = await Service.countDocuments(query);

    // Get category statistics
    const categoryStats = await Service.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        services,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statistics: {
          byCategory: categoryStats,
          total
        }
      }
    });

  } catch (error: any) {
    logger.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services'
    });
  }
};

// @desc    Get single service by slug (Public)
// @route   GET /api/services/:slug
// @access  Public
export const getServiceBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const service = await Service.findOne({ 
      slug: req.params.slug, 
      isActive: true 
    })
      .select('-createdBy -updatedBy')
      .populate('relatedServices', 'title slug shortDescription category icon');

    if (!service) {
      res.status(404).json({
        success: false,
        message: 'Service not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        service
      }
    });

  } catch (error: any) {
    logger.error('Get service by slug error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service'
    });
  }
};

// @desc    Get all services (Admin)
// @route   GET /api/services/admin
// @access  Private/Admin
export const getServicesAdmin = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as string;
    const status = req.query.status as string;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string || 'displayOrder';
    const sortOrder = req.query.sortOrder as string || 'asc';

    // Build query (admin can see all services)
    let query: any = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'inactive') {
      query.isActive = false;
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    // Build sort object
    const sortObj: any = {};
    if (search) {
      sortObj.score = { $meta: 'textScore' };
    } else {
      sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }

    // Execute query with pagination
    const services = await Service.find(query)
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit)
      .populate('createdBy', 'name email')
      .populate('updatedBy', 'name email')
      .populate('relatedServices', 'title slug');

    const total = await Service.countDocuments(query);

    // Get comprehensive statistics
    const stats = await Service.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          active: { $sum: { $cond: ['$isActive', 1, 0] } },
          inactive: { $sum: { $cond: ['$isActive', 0, 1] } },
          featured: { $sum: { $cond: ['$isFeatured', 1, 0] } }
        }
      }
    ]);

    const categoryStats = await Service.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          active: { $sum: { $cond: ['$isActive', 1, 0] } }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        services,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statistics: {
          overview: stats[0] || { total: 0, active: 0, inactive: 0, featured: 0 },
          byCategory: categoryStats
        }
      }
    });

  } catch (error: any) {
    logger.error('Get services admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services'
    });
  }
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const serviceData = {
      ...req.body,
      createdBy: req.user!._id,
      updatedBy: req.user!._id
    };

    // Validate required fields
    const requiredFields = ['title', 'shortDescription', 'fullDescription', 'icon', 'category'];
    const missingFields = requiredFields.filter(field => !serviceData[field]);
    
    if (missingFields.length > 0) {
      res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
      return;
    }

    // Check if slug already exists
    if (serviceData.slug) {
      const existingService = await Service.findOne({ slug: serviceData.slug });
      if (existingService) {
        res.status(400).json({
          success: false,
          message: 'Service with this slug already exists'
        });
        return;
      }
    }

    const service = await Service.create(serviceData);

    // Populate the created service
    await service.populate([
      { path: 'createdBy', select: 'name email' },
      { path: 'updatedBy', select: 'name email' }
    ]);

    logger.info(`New service created: ${service.title} by ${req.user!.email}`);

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: {
        service
      }
    });

  } catch (error: any) {
    logger.error('Create service error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
      return;
    }

    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: 'Service with this slug already exists'
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create service'
    });
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
export const updateService = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const serviceData = {
      ...req.body,
      updatedBy: req.user!._id
    };

    // Check if slug already exists (excluding current service)
    if (serviceData.slug) {
      const existingService = await Service.findOne({ 
        slug: serviceData.slug,
        _id: { $ne: req.params.id }
      });
      
      if (existingService) {
        res.status(400).json({
          success: false,
          message: 'Service with this slug already exists'
        });
        return;
      }
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      serviceData,
      { new: true, runValidators: true }
    ).populate([
      { path: 'createdBy', select: 'name email' },
      { path: 'updatedBy', select: 'name email' },
      { path: 'relatedServices', select: 'title slug' }
    ]);

    if (!service) {
      res.status(404).json({
        success: false,
        message: 'Service not found'
      });
      return;
    }

    logger.info(`Service updated: ${service.title} by ${req.user!.email}`);

    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      data: {
        service
      }
    });

  } catch (error: any) {
    logger.error('Update service error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Failed to update service'
    });
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
export const deleteService = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      res.status(404).json({
        success: false,
        message: 'Service not found'
      });
      return;
    }

    // Remove this service from related services in other services
    await Service.updateMany(
      { relatedServices: service._id },
      { $pull: { relatedServices: service._id } }
    );

    logger.info(`Service deleted: ${service.title} by ${req.user!.email}`);

    res.status(200).json({
      success: true,
      message: 'Service deleted successfully'
    });

  } catch (error: any) {
    logger.error('Delete service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service'
    });
  }
};

// @desc    Toggle service status (active/inactive)
// @route   PATCH /api/services/:id/toggle-status
// @access  Private/Admin
export const toggleServiceStatus = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      res.status(404).json({
        success: false,
        message: 'Service not found'
      });
      return;
    }

    service.isActive = !service.isActive;
    service.updatedBy = new Types.ObjectId(req.user!._id.toString());
    await service.save();

    logger.info(`Service status toggled: ${service.title} - ${service.isActive ? 'activated' : 'deactivated'} by ${req.user!.email}`);

    res.status(200).json({
      success: true,
      message: `Service ${service.isActive ? 'activated' : 'deactivated'} successfully`,
      data: {
        service: {
          _id: service._id,
          title: service.title,
          isActive: service.isActive
        }
      }
    });

  } catch (error: any) {
    logger.error('Toggle service status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle service status'
    });
  }
};

// @desc    Bulk update display order
// @route   PATCH /api/services/bulk-order
// @access  Private/Admin
export const updateDisplayOrder = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { services } = req.body;

    if (!Array.isArray(services)) {
      res.status(400).json({
        success: false,
        message: 'Services must be an array'
      });
      return;
    }

    // Update display order for each service
    const updatePromises = services.map((serviceUpdate: any) => 
      Service.findByIdAndUpdate(
        serviceUpdate.id,
        { 
          displayOrder: serviceUpdate.displayOrder,
          updatedBy: req.user!._id
        },
        { new: true }
      )
    );

    await Promise.all(updatePromises);

    logger.info(`Display order updated for ${services.length} services by ${req.user!.email}`);

    res.status(200).json({
      success: true,
      message: 'Display order updated successfully'
    });

  } catch (error: any) {
    logger.error('Update display order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update display order'
    });
  }
};

// @desc    Get service statistics
// @route   GET /api/services/stats
// @access  Private/Admin
export const getServiceStats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const totalServices = await Service.countDocuments();
    const activeServices = await Service.countDocuments({ isActive: true });
    const featuredServices = await Service.countDocuments({ isFeatured: true });

    // Get services by category
    const categoryStats = await Service.aggregate([
      {
        $group: {
          _id: '$category',
          total: { $sum: 1 },
          active: { $sum: { $cond: ['$isActive', 1, 0] } },
          featured: { $sum: { $cond: ['$isFeatured', 1, 0] } }
        }
      },
      {
        $sort: { total: -1 }
      }
    ]);

    // Get most popular tags
    const popularTags = await Service.aggregate([
      { $unwind: '$tags' },
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    res.status(200).json({
      success: true,
      data: {
        summary: {
          total: totalServices,
          active: activeServices,
          inactive: totalServices - activeServices,
          featured: featuredServices
        },
        byCategory: categoryStats,
        popularTags: popularTags
      }
    });

  } catch (error: any) {
    logger.error('Get service stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service statistics'
    });
  }
};
