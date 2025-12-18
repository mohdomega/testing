'use server';

import { sendMail } from '@/lib';

import { getJDPath } from './jdMapping';

interface DownloadJDRequest {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobCategory: string;
  jobType: string;
}

export async function downloadJD(data: DownloadJDRequest) {
  const { name, email, phone, jobTitle, jobCategory, jobType } = data;

  // Check if environment variables are configured
  if (
    !process.env.NODEMAILER_USER_EMAIL_ID ||
    !process.env.NODEMAILER_USER_PASSWORD ||
    !process.env.ADMIN_EMAIL_ID
  ) {
    console.error(
      'Email configuration missing: NODEMAILER_USER_EMAIL_ID, NODEMAILER_USER_PASSWORD, or ADMIN_EMAIL_ID not set'
    );
    return {
      success: false,
      error: 'Email service is not configured. Please contact support.',
      downloadUrl: null,
    };
  }

  try {
    // Send email notification
    await sendMail({
      from: `IDRMS Careers - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
      to: process.env.ADMIN_EMAIL_ID,
      subject: `JD Download: ${jobTitle}`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .info-section {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .info-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .info-label {
                font-weight: 600;
                color: #4b5563;
                width: 150px;
                flex-shrink: 0;
              }
              .info-value {
                color: #111827;
                flex: 1;
              }
              .chip {
                display: inline-block;
                background: #667eea;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                margin: 4px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Job Description Download</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">${name} has downloaded a job description</p>
              </div>
              <div class="content">
                <div class="info-section">
                  <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Job Details</h3>
                  <div class="info-row">
                    <span class="info-label">Job Title:</span>
                    <span class="info-value"><strong>${jobTitle}</strong></span>
                  </div>
                  ${
                    jobCategory
                      ? `<div class="info-row">
                    <span class="info-label">Category:</span>
                    <span class="info-value">
                      <span class="chip">${jobCategory}</span>
                    </span>
                  </div>`
                      : ''
                  }
                  ${
                    jobType
                      ? `<div class="info-row">
                    <span class="info-label">Job Type:</span>
                    <span class="info-value">
                      <span class="chip">${jobType}</span>
                    </span>
                  </div>`
                      : ''
                  }
                </div>

                <div class="info-section">
                  <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Downloader Information</h3>
                  <div class="info-row">
                    <span class="info-label">Name:</span>
                    <span class="info-value">${name}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${email}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Phone:</span>
                    <span class="info-value">${phone}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Downloaded At:</span>
                    <span class="info-value">${new Date().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Get PDF path based on job title
    const pdfPath = getJDPath(jobTitle);

    return {
      success: true,
      downloadUrl: pdfPath,
      error: null,
    };
  } catch (error: any) {
    console.error('JD download email error:', error);
    return {
      success: false,
      error: 'Failed to process download. Please try again later.',
      downloadUrl: null,
    };
  }
}
