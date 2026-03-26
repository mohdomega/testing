'use server';

import { sendMail } from '@/lib';

export async function applyNow(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const resume = formData.get('resume') as File | null;
    const jobTitle = formData.get('jobTitle') as string;
    const jobCategory = formData.get('jobCategory') as string;
    const jobType = formData.get('jobType') as string;

    console.log('Apply Now - Received data:', {
      name: !!name,
      email: !!email,
      phone: !!phone,
      resume: resume ? { name: resume.name, size: resume.size, type: resume.type } : null,
      jobTitle: !!jobTitle,
    });

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
      };
    }

    if (!name || !email || !phone || !resume || !jobTitle) {
      console.error('Apply Now - Missing required fields');
      return {
        success: false,
        error: 'Please fill in all required fields.',
      };
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(resume.type)) {
      console.error('Apply Now - Invalid file type:', resume.type);
      return {
        success: false,
        error: 'Please upload a PDF or image file (JPG, PNG) for your resume.',
      };
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (resume.size > maxSize) {
      console.error('Apply Now - File too large:', resume.size);
      return {
        success: false,
        error: 'Resume file size should be less than 5MB.',
      };
    }

    // Convert file to base64 for email attachment
    console.log('Apply Now - Converting file to base64...');
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64File = buffer.toString('base64');
    console.log('Apply Now - File converted, size:', base64File.length);

    // Send email notification with resume attachment
    console.log('Apply Now - Sending email...');
    await sendMail({
      from: `IDRMS Careers - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
      to: process.env.ADMIN_EMAIL_ID,
      subject: `New Job Application: ${jobTitle}`,
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
                <h2 style="margin: 0;">New Job Application</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">${name} has applied for a position</p>
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
                  <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Applicant Information</h3>
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
                    <span class="info-label">Resume:</span>
                    <span class="info-value">${resume.name} (${(resume.size / 1024).toFixed(2)} KB)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Applied At:</span>
                    <span class="info-value">${new Date().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: resume.name,
          content: base64File,
          encoding: 'base64',
        },
      ],
    });

    console.log('Apply Now - Email sent successfully');
    return {
      success: true,
      error: null,
    };
  } catch (error: any) {
    console.error('Apply Now - Error:', error);
    console.error('Apply Now - Error details:', {
      message: error?.message,
      stack: error?.stack,
    });
    return {
      success: false,
      error: error?.message || 'Failed to submit your application. Please try again later.',
    };
  }
}
