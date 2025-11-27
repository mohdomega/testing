'use server';

import { sendMail } from '@/lib';

import { validateContact } from './validation';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

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

  const emailDetails = {
    from: `IDRMS - <${process.env.NODEMAILER_USER_EMAIL_ID}>`,
    to: process.env.ADMIN_EMAIL_ID,
    subject: 'Testing',
    html: `
     <html>
      <body>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td>Message:</td>
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
    // TODO: log the error to logger
    console.log(error);
  }
}
