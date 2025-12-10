'use server';

import { sendMail } from '@/lib';

import { validateJoinUs } from './validation';

export async function joinUs(state: unknown, formData: FormData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    whyIdrm: formData.get('whyIdrm'),
  };

  const validatedData = validateJoinUs.safeParse(data);
  const { success } = validatedData;

  if (!success) {
    return {
      success: false,
      formData: data,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, whyIdrm } = validatedData.data;

  // Check if environment variables are configured
  if (!process.env.NODEMAILER_USER_EMAIL_ID || !process.env.ADMIN_EMAIL_ID) {
    console.error('Email configuration missing: NODEMAILER_USER_EMAIL_ID or ADMIN_EMAIL_ID not set');
    return {
      success: false,
      error: 'Email service is not configured. Please contact support.',
    };
  }

  const emailDetails = {
    from: `IDRMS Career - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
    to: process.env.ADMIN_EMAIL_ID,
    subject: 'New Job Application / Initial Interest',
    html: `
     <html>
      <body>
        <h3>New Join Us Submission</h3>
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
              <td><strong>Why IDRMS:</strong></td>
              <td>${whyIdrm}</td>
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
    console.error('Join Us form email error:', error);
    return {
      success: false,
      error: 'Failed to send your application. Please try again later.',
    };
  }
}
