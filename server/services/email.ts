import nodemailer from 'nodemailer';
import { type InsertContactMessage } from '@shared/schema';

interface EmailError {
  code: string;
  command: string;
  response: string;
  responseCode: number;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASSWORD;

  console.log('Email Configuration:', {
    hasUser: !!emailUser,
    hasPassword: !!emailPass,
    userEmail: emailUser // Log the actual email for debugging
  });

  if (!emailUser || !emailPass) {
    throw new Error('Email configuration is missing. Please check EMAIL_USER and EMAIL_PASSWORD environment variables.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

const getTransporter = () => {
  if (!transporter) {
    transporter = createTransporter();
  }
  return transporter;
};

const validateEmail = (email: string): boolean => {
  return Boolean(email && email.includes('@') && email.includes('.'));
};

const emailTemplate = (data: { name: string; email: string; subject: string; message: string }, isReply: boolean = false) => {
  const { name, email, subject, message } = data;
  
  // Use a reliable image hosting service URL
  const logoUrl = 'https://i.ibb.co/R4MPF7h/phleo.png';
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isReply ? 'Reply from Delly' : 'New Contact Form Message'}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }
          .header {
            text-align: center;
            padding: 20px 0;
            background-color: #f8f9fa;
            border-bottom: 2px solid #e9ecef;
          }
          .logo-image {
            max-width: 200px;
            height: auto;
            margin: 0 auto 15px;
            display: block;
          }
          .logo-text {
            font-size: 32px;
            font-weight: bold;
            color: #DAA520;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: none;
          }
          img[src=""] {
            display: none;
          }
          .logo-image[src=""], .logo-image:not([src]) {
            display: none;
          }
          .logo-image:not([src]) + .logo-text,
          .logo-image[src=""] + .logo-text,
          .logo-image.error + .logo-text {
            display: block;
          }
          .content {
            padding: 30px 20px;
          }
          .message-box {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            border-top: 2px solid #e9ecef;
            font-size: 14px;
            color: #6c757d;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #DAA520;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
          }
          .info-item {
            margin: 10px 0;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
          }
          .info-label {
            font-weight: bold;
            color: #495057;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${logoUrl}" 
                 alt="Delly Logo" 
                 class="logo-image"
                 onerror="this.classList.add('error')"
            />
            <div class="logo-text">PHLEO DELLY</div>
            <h1 style="color: #212529; margin: 0;">${isReply ? 'Reply from Delly' : 'New Contact Form Message'}</h1>
          </div>
          
          <div class="content">
            ${isReply ? `
              <p>Hello ${name},</p>
              <p>Thank you for reaching out! I have received your message and will get back to you shortly.</p>
              <div class="message-box">
                <p><strong>Your Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p>Best regards,<br>Delly</p>
            ` : `
              <div class="info-item">
                <span class="info-label">From:</span> ${name} (${email})
              </div>
              <div class="info-item">
                <span class="info-label">Subject:</span> ${subject}
              </div>
              <div class="message-box">
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="text-align: center;">
                <a href="mailto:${email}" class="button">Reply to ${name}</a>
              </div>
            `}
          </div>
          
          <div class="footer">
            <p>This is an automated message from your portfolio contact form.</p>
            <p>© ${new Date().getFullYear()} Delly Portfolio. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const sendTestEmail = async () => {
  try {
    const transporter = getTransporter();
    const adminEmail = process.env.EMAIL_USER;

    if (!adminEmail) {
      throw new Error('Admin email not configured');
    }

    console.log('Sending test email to:', adminEmail);

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: adminEmail
      },
      to: adminEmail,
      subject: "Test Email from Portfolio",
      html: emailTemplate({
        name: "Test User",
        email: adminEmail,
        subject: "Test Email",
        message: "This is a test email from your portfolio contact form. If you're receiving this, the email service is working correctly."
      }),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending test email:", error);
    const emailError = error as EmailError;
    throw new Error(
      `Failed to send test email: ${emailError.response || emailError.message}`
    );
  }
};

export const sendContactEmail = async (data: { name: string; email: string; subject: string; message: string }) => {
  try {
    const transporter = getTransporter();
    const adminEmail = process.env.EMAIL_USER;

    if (!adminEmail) {
      throw new Error('Admin email not configured');
    }

    if (!data.email || !data.name) {
      throw new Error('Name and email are required');
    }

    console.log('Sending contact form email:', {
      from: adminEmail,
      to: [adminEmail, data.email],
      subject: data.subject
    });

    // Send email to admin
    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: adminEmail
      },
      to: adminEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: emailTemplate(data),
    });

    // Send thank you email to the submitter
    await transporter.sendMail({
      from: {
        name: "Phleo Delly",
        address: adminEmail
      },
      to: data.email,
      subject: "Thank you for contacting me!",
      html: emailTemplate(data, true),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    const emailError = error as EmailError;
    throw new Error(
      `Failed to send email: ${emailError.response || emailError.message}`
    );
  }
};
