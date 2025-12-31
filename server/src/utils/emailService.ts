import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.in',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (process.env.SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.SMTP_USER || 'aryan@unfoldfinlegsolutions.com',
    pass: process.env.SMTP_PASS as string, // ZOHO password in .env
  },
});

// optional: check once at startup
transporter.verify().then(() => {
  console.log('✅ SMTP server is ready to take messages');
}).catch((err) => {
  console.error('❌ SMTP configuration error:', err);
});

export const sendContactEmail = async (contactData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  serviceSubcategory: string;
  message: string;
}) => {
  const emailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Phone:</strong> ${contactData.phone}</p>
    <p><strong>Company:</strong> ${contactData.company}</p>
    <p><strong>Service:</strong> ${contactData.service}</p>
    <p><strong>Service Subcategory:</strong> ${contactData.serviceSubcategory}</p>
    <p><strong>Message:</strong></p>
    <p>${contactData.message.replace(/\n/g, '<br>')}</p>
  `;

  return transporter.sendMail({
    from: process.env.SMTP_FROM || '"Unfold Finleg Solutions" <aryan@unfoldfinlegsolutions.com>',
    to: process.env.ADMIN_EMAIL || 'aryan@unfoldfinlegsolutions.com',
    subject: `New Contact Request from ${contactData.name}`,
    html: emailContent,
    replyTo: contactData.email,
  });
};
