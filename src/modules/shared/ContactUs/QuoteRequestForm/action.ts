'use server';

import { sendMail } from '@/lib';

import { validateQuoteRequest } from './validation';

export async function submitQuoteRequest(state: unknown, formData: FormData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message') || undefined,
    service: formData.get('service'),
    budget: formData.get('budget') || undefined,
    deliveryTime: formData.get('deliveryTime'),
    formType: formData.get('formType') || 'quote',
  };

  const validatedData = validateQuoteRequest.safeParse(data);
  const { success } = validatedData;

  if (!success) {
    return {
      success: false,
      formData: data,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, message, service, budget, deliveryTime, formType } = validatedData.data;

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

  // Dynamic subject based on service and form type
  const subject =
    formType === 'quote' ? `New Quote Request - ${service}` : `New Service Request - ${service}`;

  const emailDetails = {
    from: `IDRMS - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
    to: process.env.ADMIN_EMAIL_ID,
    subject,
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
          .message-box {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">${formType === 'quote' ? 'New Quote Request' : 'New Service Request'}</h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">A new ${
              formType === 'quote' ? 'quote' : 'service'
            } request has been submitted</p>
          </div>
          <div class="content">
            <div class="info-section">
              <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h3>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">${firstName} ${lastName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${email}</span>
              </div>
            </div>

            <div class="info-section">
              <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h3>
              <div class="info-row">
                <span class="info-label">Service:</span>
                <span class="info-value">
                  <span class="chip">${service}</span>
                </span>
              </div>
              ${
                budget
                  ? `<div class="info-row">
                <span class="info-label">Budget:</span>
                <span class="info-value">
                  <span class="chip">${budget}</span>
                </span>
              </div>`
                  : ''
              }
              <div class="info-row">
                <span class="info-label">Delivery Timeline:</span>
                <span class="info-value">
                  <span class="chip">${deliveryTime}</span>
                </span>
              </div>
            </div>

            ${
              message
                ? `<div class="info-section">
              <h3 style="margin-top: 0; color: #111827; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>`
                : ''
            }
          </div>
        </div>
      </body>
    </html>
    `,
  };

  try {
    await sendMail(emailDetails);

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Quote request email error:', error);
    return {
      success: false,
      error: 'Failed to send request. Please try again later.',
    };
  }
}
