# Deployment Guide

## Pushing to GitHub

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Name it `makoukji`
   - **Do NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/makoukji.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

## Deploying to Vercel

1. **Sign up/Login to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in using your GitHub account

2. **Import your project:**
   - Click "New Project" in the Vercel dashboard
   - Select the `makoukji` repository from your GitHub account
   - Click "Import"

3. **Configure deployment:**
   - Vercel will automatically detect Next.js
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your site will be live at a URL like: `makoukji.vercel.app`

5. **Add custom domain (makoukji.com):**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add `makoukji.com` and `www.makoukji.com`
   - Follow the DNS configuration instructions
   - Vercel will automatically provision SSL certificates

## Environment Variables

If you need to add environment variables:
- Go to Project Settings → Environment Variables
- Add any required variables
- Redeploy your application

## Continuous Deployment

Vercel automatically deploys:
- Every push to the `main` branch (production)
- Pull requests get preview deployments

Your website is now live! 🎉

