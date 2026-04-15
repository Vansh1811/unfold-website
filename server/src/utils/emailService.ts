import nodemailer from 'nodemailer';
import xss from 'xss';
import { config } from '../config/index';
import logger from './logger';

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  serviceSubcategory: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.secure,
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass,
  },
  connectionTimeout: 8000,
  greetingTimeout: 8000,
  socketTimeout: 8000,
});

export const verifyMailer = async (): Promise<void> => {
  try {
    await transporter.verify();
    logger.info('SMTP server is ready to take messages');
  } catch (err) {
    logger.error('SMTP configuration error', {
      error: err instanceof Error ? err.message : 'Unknown error',
    });
    // Don't throw — startup should not crash on mail issues
  }
};

export const sendContactEmail = async (contactData: ContactData): Promise<void> => {
  const safe = {
    name: xss(contactData.name),
    email: xss(contactData.email),
    phone: xss(contactData.phone),
    company: xss(contactData.company),
    service: xss(contactData.service),
    serviceSubcategory: xss(contactData.serviceSubcategory),
    message: xss(contactData.message).replace(/\n/g, '<br>'),
  };

  const adminHtml = `
    <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#1f2937;padding:24px">
    <h2 style="color:#0ea5e9">New Contact Form Submission</h2>
    <table cellpadding="10" style="border-collapse:collapse;width:100%">
      <tr style="background:#f8fafc"><td style="font-weight:bold;width:160px">Name</td><td>${safe.name}</td></tr>
      <tr><td style="font-weight:bold">Email</td><td>${safe.email}</td></tr>
      <tr style="background:#f8fafc"><td style="font-weight:bold">Phone</td><td>${safe.phone}</td></tr>
      <tr><td style="font-weight:bold">Company</td><td>${safe.company}</td></tr>
      <tr style="background:#f8fafc"><td style="font-weight:bold">Service</td><td>${safe.service}</td></tr>
      <tr><td style="font-weight:bold">Sub-category</td><td>${safe.serviceSubcategory}</td></tr>
    </table>
    <h3 style="margin-top:24px">Message</h3>
    <div style="background:#f8fafc;padding:16px;border-left:4px solid #0ea5e9;border-radius:4px">
      <p style="margin:0">${safe.message}</p>
    </div>
    <p style="color:#6b7280;font-size:12px;margin-top:24px">
      Submitted ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    </p>
    </body></html>`;

  const userHtml = `
    <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#1f2937;padding:24px">
    <h2 style="color:#0ea5e9">Thank you for contacting us, ${safe.name}!</h2>
    <p>We have received your enquiry and will get back to you within <strong>24 hours</strong>.</p>
    <div style="background:#f8fafc;padding:16px;border-left:4px solid #0ea5e9;border-radius:4px;margin:24px 0">
      <p style="margin:0"><strong>Your message</strong></p>
      <p style="margin:8px 0 0">${safe.message}</p>
    </div>
    <p>If you have any urgent queries, feel free to reply to this email.</p>
    <br><p style="color:#6b7280">Team Unfold Finleg Solutions</p>
    </body></html>`;

  await transporter.sendMail({
    from: config.email.from,
    to: config.email.adminEmail,
    subject: `New Contact Request from ${safe.name}`,
    html: adminHtml,
    replyTo: contactData.email,
  });

  await transporter.sendMail({
    from: config.email.from,
    to: contactData.email,
    subject: 'Thank you for contacting Unfold Finleg Solutions',
    html: userHtml,
  });

  logger.info('Contact emails sent successfully', { submittedBy: contactData.email });
};