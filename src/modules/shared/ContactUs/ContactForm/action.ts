'use server';

import { sendMail } from '@/lib';

import { validateContact } from './validation';

export async function contactUs(state: unknown, formData: FormData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const validatedData = validateContact.safeParse(data);
  const { success } = validatedData;

  if (!success) {
    return {
      success: false,
      formData: data,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, message } = validatedData.data;

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

  const emailDetails = {
    from: `IDRMS - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
    to: process.env.ADMIN_EMAIL_ID,
    subject: 'New Contact Form Submission',
    html: `
     <html>
      <body>
        <h3>New Contact Form Submission</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Message:</strong></td>
              <td>${message}</td>
            </tr>
          </tbody>
        </table>
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
    console.error('Contact form email error:', error);
    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
    };
  }
}
