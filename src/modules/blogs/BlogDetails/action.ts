'use server';

import { sendMail } from '@/lib';

import { validateNewsletter } from './validation';

export async function subscribeNewsletter(state: unknown, formData: FormData) {
    const data = {
        email: formData.get('email'),
    };

    const validatedData = validateNewsletter.safeParse(data);
    const { success } = validatedData;

    if (!success) {
        return {
            success: false,
            formData: data,
            errors: validatedData.error.flatten().fieldErrors,
        };
    }

    // Add a small delay to ensure loading state is visible for successful submissions
    // await new Promise((resolve) => setTimeout(resolve, 500));

    const { email } = validatedData.data;

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
        from: `IDRMS Newsletter - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
        to: process.env.ADMIN_EMAIL_ID,
        subject: 'New Newsletter Subscription',
        html: `
     <html>
      <body>
        <h3>New Newsletter Subscription</h3>
        <p>A new user has subscribed to the newsletter:</p>
        <table>
          <tbody>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
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
        console.error('Newsletter subscription email error:', error);
        return {
            success: false,
            error: 'Failed to subscribe. Please try again later.',
        };
    }
}
