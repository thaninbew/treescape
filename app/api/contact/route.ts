import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure with actual email service)
    const transporter = nodemailer.createTransporter({
      // Using Gmail as an example - replace with your actual email service
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      
      ${formData.checkIn || formData.checkOut || formData.guests ? `
      <h3>Booking Details:</h3>
      ${formData.checkIn ? `<p><strong>Check-in Date:</strong> ${formData.checkIn}</p>` : ''}
      ${formData.checkOut ? `<p><strong>Check-out Date:</strong> ${formData.checkOut}</p>` : ''}
      ${formData.guests ? `<p><strong>Number of Guests:</strong> ${formData.guests}</p>` : ''}
      ` : ''}
      
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${formData.message}</p>
      
      <hr>
      <p><small>This message was sent via the Treescape Resort contact form.</small></p>
    `;

    // Send email to reservation@treescaperesort.com
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'reservation@treescaperesort.com',
      subject: `Contact Form: ${formData.subject} - ${formData.name}`,
      html: emailContent,
      replyTo: formData.email,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting Treescape Resort',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 5px;">${formData.message}</p>
        
        <p>Best regards,<br/>
        The Treescape Resort Team<br/>
        Phone: (+66)053-125-123, (+66)091-069-0123<br/>
        Email: reservation@treescaperesort.com</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 