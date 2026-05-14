# 🚀 QUICK START - Deploy in 10 Minutes

## Step 1: Install Node.js (if you don't have it)
Download from https://nodejs.org (use LTS version)

## Step 2: Extract and Install
```bash
# Navigate to the extracted folder
cd ai-student-blog

# Install dependencies
npm install
```

## Step 3: Test Locally
```bash
# Start development server
npm run dev
```
Visit http://localhost:4321 - your blog is running!

## Step 4: Customize
1. Edit `src/pages/about.astro` - Add your name and bio
2. Edit `src/layouts/Layout.astro` - Already set to "Build With AI" (change if needed)
3. Replace social links in footer

## Step 5: Deploy to Netlify (FREE)

### Option A: Drag & Drop (Easiest - 2 minutes)
```bash
# Build your site
npm run build
```
1. Go to https://netlify.com (create free account)
2. Drag the `dist` folder into Netlify
3. Done! You get a URL like yourname.netlify.app

### Option B: GitHub Auto-Deploy (Recommended)
1. Create GitHub account
2. Create new repository
3. Push code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```
4. In Netlify: "New site from Git" → Connect GitHub → Auto-deploys!

## Step 6: Customize Content
- Update `src/pages/contact.astro` - Forms already configured with Formspree
- Edit blog posts in `src/pages/blog/`
- Change colors in `src/styles/global.css`

## Need Help?
- Check README.md for detailed instructions
- All forms are pre-configured and ready to use
- Analytics: Add Google Analytics ID in Layout.astro (optional)

## What You Get
✅ Homepage with animated stats
✅ About page
✅ Contact form
✅ Blog with 3 complete posts
✅ 95+ PageSpeed score
✅ Mobile responsive
✅ SEO optimized
✅ $0/month hosting

Start customizing and make it yours!
