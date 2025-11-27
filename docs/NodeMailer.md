# 📧 How to Set Up Email Credentials for Nodemailer (Gmail)

This guide will help you securely set up your Gmail account to work with our application using **App Passwords**. No technical experience needed!

---

## ✅ What You’ll Need

- A Google/Gmail account
- Access to your phone (for 2-step verification)

---

## 🔐 Step 1: Turn On 2-Step Verification (if not already on)

1. Go to your Google Account: [https://myaccount.google.com](https://myaccount.google.com)
2. Click **"Security"** in the left-hand menu.
3. Find the **"Signing in to Google"** section.
4. Click **"2-Step Verification"** and follow the steps to set it up.

> 📝 You’ll use your phone number or Google Authenticator app for verification.

---

## 🔑 Step 2: Create an App Password

1. Once 2-Step Verification is set up, go back to the **Security** page.
2. Under **"Signing in to Google"**, click **"App passwords"** or search it.

> 📌 If you don’t see this option, make sure 2-Step Verification is turned on first.

3. Google may ask you to sign in again.
4. Under **"Select app"**, choose **"Mail"**.
5. Under **"Select device"**, choose **"Other"**, then type something like `Nodemailer`.
6. Click **"Generate"**.

### ✅ Copy the 16-character app password shown on screen.

> ⚠️ You **will not see this password again**, so copy and save it now (temporarily) to paste into your app's configuration.

---

## 📁 Step 3: Add the Credentials to the `.env` File

You will need to send us the following information **securely** (not in plain email):

```
NODEMAILER_USER_EMAIL_ID=your-email@gmail.com
NODEMAILER_USER_PASSWORD=your-16-character-app-password
```

> 📌 We recommend sending this through a secure channel (e.g., password manager link, or encrypted messaging).

---

## 🧪 Optional: Verify the Setup

Once added to the system, verify that the email sending is working. No further action is needed on your part.
