import { Request, Response } from 'express';
import Team from '../models/Team';
import { AuthRequest } from '../middleware/authMiddleware';
import logger from '../utils/logger';

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
export const getAllTeamMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const teamMembers = await Team.find({ isActive: true })
      .sort({ order: 1, name: 1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      data: {
        teamMembers,
        count: teamMembers.length
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Get team members error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Get single team member
// @route   GET /api/team/:id
// @access  Public
export const getTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const teamMember = await Team.findById(req.params.id);

    if (!teamMember) {
      res.status(404).json({
        success: false,
        data: null,
        error: {
          message: 'Team member not found',
          code: 404
        }
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        teamMember
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Get team member error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Create team member
// @route   POST /api/team
// @access  Private (admin/editor)
export const createTeamMember = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const teamMember = await Team.create(req.body);

    logger.info(`Team member created: ${teamMember.name} by ${req.user?.email}`);

    res.status(201).json({
      success: true,
      data: {
        teamMember
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Create team member error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Validation Error',
          code: 400,
          details: errors
        }
      });
      return;
    }

    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Update team member
// @route   PUT /api/team/:id
// @access  Private (admin/editor)
export const updateTeamMember = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const teamMember = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!teamMember) {
      res.status(404).json({
        success: false,
        data: null,
        error: {
          message: 'Team member not found',
          code: 404
        }
      });
      return;
    }

    logger.info(`Team member updated: ${teamMember.name} by ${req.user?.email}`);

    res.status(200).json({
      success: true,
      data: {
        teamMember
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Update team member error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Validation Error',
          code: 400,
          details: errors
        }
      });
      return;
    }

    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Delete team member
// @route   DELETE /api/team/:id
// @access  Private (admin only)
export const deleteTeamMember = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);

    if (!teamMember) {
      res.status(404).json({
        success: false,
        data: null,
        error: {
          message: 'Team member not found',
          code: 404
        }
      });
      return;
    }

    logger.info(`Team member deleted: ${teamMember.name} by ${req.user?.email}`);

    res.status(200).json({
      success: true,
      data: {
        message: 'Team member deleted successfully'
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Delete team member error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};
