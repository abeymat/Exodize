# Exodize Website - Deployment Guide

## Prerequisites

Before deploying, make sure you have:
- ✅ Configured EmailJS (see `EMAILJS_SETUP.md`)
- ✅ Tested the contact form locally
- ✅ Git installed on your computer
- ✅ A GitHub account

## Step 1: Initialize Git Repository

Open PowerShell in the Exodize folder and run:

```powershell
git init
git add .
git commit -m "Initial commit: Exodize website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right > **New repository**
3. Repository name: `exodize-website` (or your preferred name)
4. Description: "Salesforce + AI consulting website for Exodize"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in PowerShell:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/exodize-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to GitHub Pages (Free Hosting)

### Option A: Using GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait a few minutes, then your site will be live at:
   `https://YOUR_USERNAME.github.io/exodize-website/`

### Option B: Using Netlify (Recommended - Better Performance)

1. Go to [Netlify.com](https://www.netlify.com/)
2. Click **Sign up** and sign in with GitHub
3. Click **Add new site** > **Import an existing project**
4. Choose **GitHub** and authorize Netlify
5. Select your `exodize-website` repository
6. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
7. Click **Deploy site**
8. Your site will be live at a Netlify URL (e.g., `random-name-123.netlify.app`)
9. You can customize the domain in **Site settings** > **Domain management**

### Option C: Using Vercel

1. Go to [Vercel.com](https://vercel.com/)
2. Click **Sign up** and sign in with GitHub
3. Click **Add New** > **Project**
4. Import your `exodize-website` repository
5. Click **Deploy**
6. Your site will be live at a Vercel URL

## Step 5: Custom Domain (Optional)

If you own a custom domain (e.g., `exodize.com`):

### For Netlify:
1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

### For GitHub Pages:
1. Go to repository **Settings** > **Pages**
2. Under "Custom domain", enter your domain
3. Follow the DNS configuration instructions

## Step 6: Configure EmailJS for Production

**IMPORTANT:** Before deploying, you need to handle the `config.js` file:

### Option 1: Environment-based Configuration (Recommended)

Create a `config.example.js` file:

```javascript
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'
};
```

Then:
1. Copy `config.js` to `config.example.js`
2. Replace actual values in `config.example.js` with placeholders
3. Commit `config.example.js` to Git
4. Keep your real `config.js` local (it's in `.gitignore`)

For deployment, you'll need to manually add your real `config.js` or use environment variables.

### Option 2: Use EmailJS Public Key Only (Simpler)

Since EmailJS public keys are safe to expose, you can:
1. Remove `config.js` from `.gitignore`
2. Commit it to your repository
3. Deploy normally

**Note:** Your Service ID and Template ID will be visible in the source code, but this is generally safe as EmailJS requires the public key to send emails.

## Testing Your Deployed Site

1. Visit your deployed URL
2. Test all navigation links
3. Test the contact form
4. Check on mobile devices
5. Test in different browsers (Chrome, Firefox, Safari, Edge)

## Updating Your Site

When you make changes:

```powershell
git add .
git commit -m "Description of changes"
git push
```

Your hosting platform (Netlify/Vercel/GitHub Pages) will automatically redeploy.

## Monitoring

### EmailJS Dashboard
- Check your email quota usage
- Monitor sent emails
- View error logs

### Analytics (Optional)
Consider adding:
- Google Analytics
- Plausible Analytics
- Simple Analytics

## Backup

Always keep a local backup of your website files, especially:
- `config.js` (with real credentials)
- Any custom content or images

## Troubleshooting

### Site not loading after deployment
- Check that all file paths are correct
- Verify `index.html` is in the root directory
- Check browser console for errors

### Contact form not working on deployed site
- Verify `config.js` is loaded correctly
- Check EmailJS dashboard for errors
- Ensure your domain is allowed in EmailJS settings

### Styles not loading
- Check that `style.css` path is correct in `index.html`
- Clear browser cache
- Check for console errors

## Security Checklist

Before going live:
- ✅ EmailJS credentials are properly configured
- ✅ No sensitive information in code
- ✅ `.gitignore` is set up correctly
- ✅ Contact form has been tested
- ✅ All links work correctly
- ✅ Mobile responsiveness verified

## Next Steps

1. Set up a custom domain
2. Add Google Analytics or similar
3. Set up email forwarding for contact@exodize.com
4. Create social media profiles
5. Add SSL certificate (automatic with Netlify/Vercel)
6. Submit to search engines (Google Search Console)

## Support

Need help? Check these resources:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

**Congratulations!** Your Exodize website is now live! 🎉
