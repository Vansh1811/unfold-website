import { Request, Response } from 'express';
import { sendContactEmail } from '../utils/emailService';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, company, service, serviceSubcategory, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing required fields', code: 400 }
      });
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      phone,
      company: company || 'N/A',
      service: service || 'N/A',
      serviceSubcategory: serviceSubcategory || 'N/A',
      message,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: { message: 'Failed to send email', code: 500 }
    });
  }
};

