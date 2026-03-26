'use server';

import { sendMail } from '@/lib';

import { validateJoinUs } from './validation';

export async function joinUs(state: unknown, formData: FormData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    whyIdrm: formData.get('whyIdrm'),
    resume: formData.get('resume') as File | null,
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
  const resume = data.resume;

  // Validate resume if provided
  if (resume && resume.size > 0) {
    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(resume.type)) {
      return {
        success: false,
        formData: data,
        errors: {
          resume: ['Please upload a PDF or image file (JPG, PNG) for your resume.'],
        },
      };
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (resume.size > maxSize) {
      return {
        success: false,
        formData: data,
        errors: {
          resume: ['Resume file size should be less than 5MB.'],
        },
      };
    }
  }

  // Check if environment variables are configured
  if (!process.env.NODEMAILER_USER_EMAIL_ID || !process.env.ADMIN_EMAIL_ID) {
    console.error('Email configuration missing: NODEMAILER_USER_EMAIL_ID or ADMIN_EMAIL_ID not set');
    return {
      success: false,
      error: 'Email service is not configured. Please contact support.',
    };
  }

  // Prepare email with optional resume attachment
  const attachments = [];
  if (resume && resume.size > 0) {
    try {
      const arrayBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64File = buffer.toString('base64');
      attachments.push({
        filename: resume.name,
        content: base64File,
        encoding: 'base64',
      });
    } catch (error) {
      console.error('Error processing resume file:', error);
    }
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
            ${
              resume && resume.size > 0
                ? `
            <tr>
              <td><strong>Resume:</strong></td>
              <td>${resume.name} (${(resume.size / 1024).toFixed(2)} KB)</td>
            </tr>
            `
                : ''
            }
          </tbody>
        </table>
      </body>
    </html>
    `,
    ...(attachments.length > 0 && { attachments }),
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
