# Maria Podobrazhnykh Website

This is the portfolio website for Maria Podobrazhnykh, consisting of two main sections:
- **Main Portfolio Page**: Professional UX/UI design portfolio (converted from Tilda)
- **Sailing Page**: Information about sailing trips and adventures (converted from Webflow)

## Project Overview

This website is built with Next.js and TypeScript, preserving the original designs from Tilda and Webflow while making them more maintainable.

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
# Create a production build
npm run build

# The build output will be in the 'out' directory
```

## Deployment to Vercel

The easiest way to deploy this site is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Use the following settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
5. Deploy
6. Configure your custom domain (maria-po.com) in the Vercel dashboard

## Project Structure

- `/public/` - Static assets 
  - `/main/` - Assets from main portfolio page
  - `/sailing/` - Assets from sailing page
- `/src/` - Source code
  - `/app/` - Next.js App Router pages
  - `/types/` - TypeScript type definitions

## Technology Stack

- Next.js
- TypeScript
- HTML/CSS (preserved from original sites)

## Future Improvements

- Component refactoring
- Performance optimizations
- Comprehensive TypeScript typing
- Responsive design improvements
- Tailwind CSS integration

## 🌟 About This Site

This repository contains a Next.js implementation of Maria Podobrazhnykh's website that combines:

1. **Main Portfolio** - Professional UX/UI design portfolio (originally from Tilda)
2. **Sailing Page** - Information about sailing trips and adventures (originally from Webflow)

## 🚀 Implementation Approach

This project uses a "minimal changes" approach:

- **Original Assets Preserved** - All original styling, images, and functionality maintained
- **Next.js Framework** - For routing and deployment benefits
- **TypeScript Integration** - Basic type safety without major refactoring
- **Code Conversion** - HTML converted to TSX with minimal modifications
- **Vercel Deployment** - Fast, reliable hosting with SSL and CDN

## 📁 Project Structure

```
maria-website/
├── public/                 # Static assets
│   ├── main/              # Assets from main portfolio page
│   └── sailing/           # Assets from sailing page
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Main portfolio page
│   │   └── sailing/       # Sailing page
│   │       └── page.tsx
│   └── types/             # TypeScript type definitions
│       └── globals.d.ts   # Global type declarations
└── [Configuration files]
```

## ��‍💼 About Maria Podobrazhnykh

Maria is a UX/UI Designer with over 7 years of experience, combining her artistic background with technical skills to create user-centered designs. When not designing, she organizes sailing trips to various destinations.

## 📞 Contact

For inquiries about the website or to contact Maria:

- Telegram: [@mary_po](https://t.me/mary_po)
- Instagram: [@mariapodobrazhnykh](https://www.instagram.com/mariapodobrazhnykh/)
- LinkedIn: [Maria Podobrazhnykh](https://www.linkedin.com/in/mary-podobrazhnykh-2a7684234)