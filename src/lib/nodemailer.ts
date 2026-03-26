'use server';

import nodemailer, { SendMailOptions } from 'nodemailer';

const nodemailerAuth = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: process.env.NODEMAILER_USER_EMAIL_ID,
    pass: process.env.NODEMAILER_USER_PASSWORD,
  },
});

export async function sendMail(receiver: SendMailOptions) {
  try {
    await nodemailerAuth.sendMail(receiver);
  } catch (error) {
    console.error('Nodemailer error:', error);
    throw error; // Re-throw to be handled by the caller
  }
}
