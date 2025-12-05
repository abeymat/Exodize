# Exodize Website - EmailJS Setup Guide

## Overview
This guide will help you set up EmailJS to enable the contact form on your Exodize website to send real emails.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from the Exodize website contact form.
```

4. **Template Variables to use:**
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Exodize Team)

5. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this later

## Step 5: Update config.js

1. Open the file `config.js` in your Exodize folder
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
const EMAIL_CONFIG = {
    // Replace with your actual Public Key from Step 4
    PUBLIC_KEY: 'YOUR_ACTUAL_PUBLIC_KEY_HERE',
    
    // Replace with your actual Service ID from Step 2
    SERVICE_ID: 'YOUR_ACTUAL_SERVICE_ID_HERE',
    
    // Replace with your actual Template ID from Step 3
    TEMPLATE_ID: 'YOUR_ACTUAL_TEMPLATE_ID_HERE'
};
```

## Step 6: Test the Contact Form

1. Open `index.html` in your browser
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. You should see a success notification
6. Check your email inbox for the test message

## Troubleshooting

### Form shows "Email service is not configured"
- Make sure you've updated `config.js` with your actual credentials
- Refresh the page after updating config.js

### Form shows "Something went wrong"
- Check the browser console (F12) for error messages
- Verify your Service ID and Template ID are correct
- Make sure your email service is properly connected in EmailJS dashboard

### Emails not arriving
- Check your spam folder
- Verify the email template is set up correctly
- Make sure the email service is active in EmailJS dashboard

## EmailJS Free Tier Limits

The free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for a small business website. If you need more, you can upgrade to a paid plan.

## Security Notes

- Never commit your `config.js` file with real credentials to a public repository
- Add `config.js` to your `.gitignore` file
- For production, consider using environment variables or a backend service

## Next Steps

Once EmailJS is configured and tested:
1. Update the contact email addresses in `index.html` if needed
2. Customize the email template to match your branding
3. Test the form thoroughly before deploying
4. Consider adding a CAPTCHA for spam protection (optional)

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Ready to deploy?** See `DEPLOYMENT.md` for instructions on pushing to GitHub and hosting your website.
