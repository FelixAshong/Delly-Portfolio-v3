import nodemailer from 'nodemailer';
import { type InsertContactMessage } from '@shared/schema';

interface EmailError extends Error {
  code?: string;
  command?: string;
  response?: string;
}

let transporter: nodemailer.Transporter | null = null;

function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email configuration is missing. Please check your .env file.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

function getTransporter() {
  if (!transporter) {
    transporter = createTransporter();
  }
  return transporter;
}

export async function sendContactEmail(data: InsertContactMessage) {
  try {
    const { name, email, subject, message } = data;
    
    // Get or create transporter
    const emailTransporter = getTransporter();

    // Log configuration (without sensitive data)
    console.log('Sending email with config:', {
      from: process.env.EMAIL_USER,
      hasAuth: !!process.env.EMAIL_PASSWORD,
      service: 'gmail'
    });

    const mailOptions = {
      from: {
        name: "Portfolio Contact Form",
        address: process.env.EMAIL_USER!
      },
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    console.log('Attempting to send email...');
    const info = await emailTransporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return true;

  } catch (error) {
    const emailError = error as EmailError;
    console.error('Failed to send email:', {
      error: emailError.message,
      code: emailError.code,
      command: emailError.command,
      response: emailError.response
    });
    throw new Error(`Failed to send email: ${emailError.message}`);
  }
}
