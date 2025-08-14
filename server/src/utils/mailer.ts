import nodemailer from 'nodemailer';
import logger from './logger';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  cc?: string;
  bcc?: string;
}

class MailService {
  private transporter: nodemailer.Transporter | undefined;

  constructor() {
    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      logger.warn('⚠️  SMTP credentials not configured. Email service will be disabled.');
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465), // ✅ Changed default port to 465
      secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT || 465) === 465, // ✅ Ensure SSL for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ Added for Bluehost SSL
      },
    }); 

    // Verify connection configuration
    this.verifyConnection();
  }

  private async verifyConnection(): Promise<void> {
    try {
      if (!this.transporter) {
        logger.error('❌ Email service not initialized');
        return;
      }
      await this.transporter.verify();
      logger.info('✅ Email service is ready');
    } catch (error) {
      logger.error('❌ Email service configuration error:', error);
    }
  }

  async sendMail(options: EmailOptions): Promise<void> {
    try {
      if (!this.transporter) {
        throw new Error('Email service not initialized');
      }

      const mailOptions = {
        from: process.env.SMTP_FROM,
        to: options.to,
        subject: options.subject,
        html: options.html,
        ...(options.cc && { cc: options.cc }),
        ...(options.bcc && { bcc: options.bcc })
      };

      const info = await this.transporter.sendMail(mailOptions);
      logger.info(`Email sent successfully to ${options.to}: ${info.messageId}`);
    } catch (error) {
      logger.error('Failed to send email:', error);
      throw new Error('Failed to send email');
    }
  }
  
  // Send contact form notification to admin
  async sendContactNotificationToAdmin(contactData: any): Promise<void> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .info-grid { background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .info-item { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; margin-bottom: 5px; }
          .value { color: #1f2937; padding: 8px 12px; background-color: white; border-radius: 4px; border-left: 4px solid #0ea5e9; }
          .message-box { background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
          .priority-high { border-left-color: #ef4444 !important; }
          .priority-urgent { border-left-color: #dc2626 !important; background-color: #fef2f2 !important; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Contact Form Submission</h1>
            <p>Unfold Finleg Solutions</p>
          </div>
          
          <div class="content">
            <p>You have received a new contact form submission from your website.</p>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="label">👤 Name:</div>
                <div class="value">${contactData.name}</div>
              </div>
              
              <div class="info-item">
                <div class="label">📧 Email:</div>
                <div class="value">${contactData.email}</div>
              </div>
              
              ${contactData.phone ? `
                <div class="info-item">
                  <div class="label">📱 Phone:</div>
                  <div class="value">${contactData.phone}</div>
                </div>
              ` : ''}
              
              ${contactData.company ? `
                <div class="info-item">
                  <div class="label">🏢 Company:</div>
                  <div class="value">${contactData.company}</div>
                </div>
              ` : ''}
              
              <div class="info-item">
                <div class="label">📋 Subject:</div>
                <div class="value">${contactData.subject}</div>
              </div>
              
              ${contactData.serviceType ? `
                <div class="info-item">
                  <div class="label">🔧 Service Type:</div>
                  <div class="value">${contactData.serviceType.replace('-', ' ').toUpperCase()}</div>
                </div>
              ` : ''}
            </div>
            
            <div class="message-box ${contactData.priority === 'high' || contactData.priority === 'urgent' ? 'priority-' + contactData.priority : ''}">
              <div class="label">💬 Message:</div>
              <div style="margin-top: 10px; line-height: 1.6;">
                ${contactData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>📅 Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>🌐 IP Address: ${contactData.ipAddress || 'Not available'}</p>
            <p style="margin-top: 20px;">
              <strong>Unfold Finleg Solutions</strong><br>
              Professional Governance & Compliance Consulting
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendMail({
      to: process.env.ADMIN_EMAIL!,
      subject: `🔔 New Contact: ${contactData.subject}`,
      html: htmlContent
    });
  }

  // Send confirmation email to user
  async sendContactConfirmationToUser(contactData: any): Promise<void> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 40px; text-align: center; }
          .content { padding: 40px 30px; }
          .summary-box { background-color: #f8fafc; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #0ea5e9; }
          .footer { background-color: #f9fafb; padding: 30px; text-align: center; color: #6b7280; }
          .btn { display: inline-block; padding: 12px 24px; background-color: #0ea5e9; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Thank You for Reaching Out!</h1>
            <p>We've received your message</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${contactData.name}</strong>,</p>
            
            <p>Thank you for contacting Unfold Finleg Solutions. We have successfully received your inquiry and our team will review it shortly.</p>
            
            <div class="summary-box">
              <h3 style="margin-top: 0; color: #1f2937;">📋 Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
              ${contactData.serviceType ? `<p><strong>Service Type:</strong> ${contactData.serviceType.replace('-', ' ').toUpperCase()}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
            
            <h3>⏰ What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your inquiry within <strong>24 hours</strong></li>
              <li>You'll receive a detailed response from our experts</li>
              <li>If needed, we'll schedule a consultation call</li>
            </ul>
            
            <h3>📞 Need immediate assistance?</h3>
            <p>For urgent matters, please call us directly or visit our website for more information.</p>
            
            <div style="text-align: center;">
              <a href="https://unfoldfinleg.com" class="btn">Visit Our Website</a>
            </div>
          </div>
          
          <div class="footer">
            <h3 style="color: #1f2937;">Unfold Finleg Solutions</h3>
            <p><strong>Professional Governance & Compliance Consulting</strong></p>
            <p>📧 Email: ${process.env.ADMIN_EMAIL}<br>
            🌐 Website: www.unfoldfinleg.com</p>
            <p style="font-size: 12px; margin-top: 20px;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendMail({
      to: contactData.email,
      subject: '✅ Thank you for contacting Unfold Finleg Solutions',
      html: htmlContent
    });
  }
}

export default new MailService();
