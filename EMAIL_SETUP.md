# Email Configuration Guide

## Current Setup
The website uses EmailJS to send contact form submissions. The configuration is stored in `config.js`.

## How to Change the Recipient Email Address

The recipient email address is configured in your **EmailJS Template**, not in the code. To change it from `abey.mathews@exodize.com` to `contact@exodize.com`, follow these steps:

### Steps to Update:

1. **Log in to EmailJS**
   - Go to https://www.emailjs.com/
   - Sign in with your account

2. **Navigate to Email Templates**
   - Click on "Email Templates" in the left sidebar
   - Find your template (ID: `template_aa9h06c`)
   - Click on it to edit

3. **Update the Recipient Email**
   - Look for the "To Email" field
   - Change it from `abey.mathews@exodize.com` to `contact@exodize.com`
   - Save the template

4. **Test the Form**
   - Go to your website
   - Fill out the contact form
   - Submit it
   - Check that the email arrives at `contact@exodize.com`

## Current Configuration

- **Public Key**: `BVnftCDbdGtSJwAG6`
- **Service ID**: `service_gxxamho`
- **Template ID**: `template_aa9h06c`

## Template Variables

Your EmailJS template should use these variables:
- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{company}}` - The sender's company name
- `{{message}}` - The message content
- `{{to_name}}` - Recipient name (currently set to "Exodize Team")

## Troubleshooting

If emails are not being received:
1. Check your EmailJS dashboard for delivery status
2. Verify the recipient email is correct in the template
3. Check your spam folder
4. Ensure your EmailJS service is properly connected to your email provider
