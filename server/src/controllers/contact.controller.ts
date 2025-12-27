import { Request, Response } from 'express';
import Contact from '../models/Contact.model';
import MailService from '../utils/mailer';
import logger from '../utils/logger';
import { AuthRequest } from '../middleware/authMiddleware';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, subject, message, serviceType } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, and message'
      });
      return;
    }

    // Check for spam/duplicate submissions (same email within last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentSubmission = await Contact.findOne({
      email,
      submittedAt: { $gte: oneHourAgo }
    });

    if (recentSubmission) {
      res.status(429).json({
        success: false,
        message: 'You have already submitted a message recently. Please wait before submitting another.'
      });
      return;
    }

    // Determine priority based on service type and content
    let priority: 'low' | 'medium' | 'high' | 'urgent' = 'medium';
    const urgentKeywords = ['urgent', 'emergency', 'asap', 'immediate'];
    const highPriorityServices = ['compliance', 'risk-management'];
    
    if (urgentKeywords.some(keyword => 
      message.toLowerCase().includes(keyword) || 
      subject.toLowerCase().includes(keyword)
    )) {
      priority = 'urgent';
    } else if (serviceType && highPriorityServices.includes(serviceType)) {
      priority = 'high';
    }

    // Create contact record
    const contactData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      subject: subject.trim(),
      message: message.trim(),
      serviceType,
      priority,
      submittedAt: new Date(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };

    const contact = await Contact.create(contactData);

    // Send emails (don't wait for completion to avoid blocking response)
    Promise.all([
      MailService.sendContactNotificationToAdmin(contactData),
      MailService.sendContactConfirmationToUser(contactData)
    ]).catch(error => {
      logger.error('Email sending failed:', error);
    });

    logger.info(`New contact form submission: ${email} - ${subject}`);

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
      data: {
        id: contact._id,
        submittedAt: contact.submittedAt
      }
    });

  } catch (error: any) {
    logger.error('Contact form submission error:', error);
    
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
      message: 'Something went wrong. Please try again later.'
    });
  }
};

// @desc    Get all contact submissions (Admin only)
// @route   GET /api/contact
// @access  Private/Admin
export const getContacts = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;
    const priority = req.query.priority as string;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string || 'submittedAt';
    const sortOrder = req.query.sortOrder as string || 'desc';

    // Build query
    let query: any = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (priority && priority !== 'all') {
      query.priority = priority;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    const contacts = await Contact.find(query)
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit)
      .select('-ipAddress -userAgent'); // Exclude sensitive data

    const total = await Contact.countDocuments(query);

    // Get statistics
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const priorityStats = await Contact.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statistics: {
          byStatus: stats,
          byPriority: priorityStats,
          total
        }
      }
    });

  } catch (error: any) {
    logger.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
};

// @desc    Get single contact submission
// @route   GET /api/contact/:id
// @access  Private/Admin
export const getContact = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
      return;
    }

    // Mark as read if not already
    if (!contact.isRead) {
      contact.isRead = true;
      await contact.save();
    }

    res.status(200).json({
      success: true,
      data: {
        contact
      }
    });

  } catch (error: any) {
    logger.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact'
    });
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
export const updateContact = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { status, priority, adminNotes } = req.body;
    
    const updateData: any = {};
    
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;
    
    if (status === 'resolved' && !updateData.respondedAt) {
      updateData.respondedAt = new Date();
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
      return;
    }

    logger.info(`Contact ${contact._id} updated by admin ${req.user!.email}`);

    res.status(200).json({
      success: true,
      data: {
        contact
      }
    });

  } catch (error: any) {
    logger.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
};

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
// @access  Private/Admin
export const deleteContact = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
      return;
    }

    logger.info(`Contact ${contact._id} deleted by admin ${req.user!.email}`);

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error: any) {
    logger.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    });
  }
};

// @desc    Get contact statistics
// @route   GET /api/contact/stats
// @access  Private/Admin
export const getContactStats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const totalContacts = await Contact.countDocuments();
    const unreadContacts = await Contact.countDocuments({ isRead: false });
    const newContacts = await Contact.countDocuments({ status: 'new' });
    
    // Get contacts by month for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyStats = await Contact.aggregate([
      {
        $match: {
          submittedAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$submittedAt' },
            month: { $month: '$submittedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);
        
      

    res.status(200).json({
      success: true,
      data: {
        summary: {
          total: totalContacts,
          unread: unreadContacts,
          new: newContacts
        },
        monthly: monthlyStats
      }
    });

     
  } catch (error: any) {
    logger.error('Get contact stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact statistics'
    });
  }
};
