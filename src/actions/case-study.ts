'use server';

import { sendMail } from '@/lib/nodemailer';

interface DownloadRequest {
  name: string;
  email: string;
  studyTitle: string;
}

export async function sendCaseStudyDownloadEmail(data: DownloadRequest) {
  const { name, email, studyTitle } = data;

  // Check if environment variables are set
  if (!process.env.NODEMAILER_USER_EMAIL_ID || !process.env.NODEMAILER_USER_PASSWORD) {
    console.error('Nodemailer environment variables are not set');
    return {
      success: false,
      error: 'Email service is not configured. Please contact the administrator.',
    };
  }

  try {
    await sendMail({
      from: process.env.NODEMAILER_USER_EMAIL_ID,
      to: process.env.NODEMAILER_USER_EMAIL_ID, // Sending to admin (self)
      subject: `New Case Study Download: ${studyTitle}`,
      html: `
        <h1>New Case Study Download</h1>
        <p><strong>Case Study:</strong> ${studyTitle}</p>
        <p><strong>User Name:</strong> ${name}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return {
      success: false,
      error: errorMessage || 'Failed to send email. Please try again later.',
    };
  }
}
