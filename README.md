# Maria Podobrazhnykh Website

A website for Maria Podobrazhnykh, featuring her portfolio as a UX/UI Designer and sailing trip offerings, deployed on Vercel with minimal changes to the original files.

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

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/maria-website.git
   cd maria-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Pages

### Main Portfolio Page (/)

Original Tilda design with navigation to:
- Experience section
- Landing pages section
- Social media links
- Sailing page

### Sailing Page (/sailing)

Original Webflow design featuring:
- Sailing trip options
- Pricing information
- Photo galleries
- Contact information

## 🚢 Deployment

The site is deployed on Vercel at [maria-po.com](https://maria-po.com).

## 🔮 Future Improvements

Future iterations of this website may include:

1. Component refactoring for better maintainability
2. Performance optimizations
3. More comprehensive TypeScript typing
4. Responsive design improvements
5. Tailwind CSS for styling

## 👩‍💼 About Maria Podobrazhnykh

Maria is a UX/UI Designer with over 7 years of experience, combining her artistic background with technical skills to create user-centered designs. When not designing, she organizes sailing trips to various destinations.

## 📞 Contact

For inquiries about the website or to contact Maria:

- Telegram: [@mary_po](https://t.me/mary_po)
- Instagram: [@mariapodobrazhnykh](https://www.instagram.com/mariapodobrazhnykh/)
- LinkedIn: [Maria Podobrazhnykh](https://www.linkedin.com/in/mary-podobrazhnykh-2a7684234)