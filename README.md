# Aurum & Ember

Where fire, time, and devotion converge. A premium restaurant portfolio project showcasing modern web development, luxury design, and performant animations.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Alpha)
- **Animations**: Framer Motion
- **Icons**: Lucide React / Custom SVGs
- **Fonts**: Next.js Font Optimization (Cormorant Garamond, Inter, Outfit)

## Features
- ⚡ **Zero-Config Deployment**: Ready for Vercel, Netlify, and Render.
- 🎨 **Luxury Design System**: Custom design tokens, typography scale, and fluid spacing.
- ♿ **Accessibility**: WCAG 2.2 compliant, ARIA labels, semantic HTML, keyboard focus states, and reduced-motion support.
- 🔍 **SEO Optimized**: Dynamic `sitemap.xml`, `robots.txt`, and injected Schema.org Restaurant structured data for rich snippets.
- 📱 **Fully Responsive**: Flawless experience from mobile to 4K displays.
- ✨ **Global Page Transitions**: Cinematic routing animations.

## Getting Started

### Prerequisites
- Node.js 18.17 or later

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Guides

This project leverages the Next.js App Router and is deeply optimized for zero-configuration deployments.

### Deploy to Vercel (Recommended)
Vercel is the creator of Next.js and provides the most seamless hosting experience.
1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your repository. Vercel will automatically detect the Next.js framework.
4. Click **Deploy**.

### Deploy to Netlify
1. Push your code to a GitHub repository.
2. Log into [Netlify](https://netlify.com/) and click **Add new site > Import an existing project**.
3. Select your repository. Netlify automatically detects Next.js and configures the build settings (`npm run build` and `.next` directory).
4. Click **Deploy site**.

### Deploy to Render
1. Push your code to a GitHub repository.
2. Log into [Render](https://render.com/) and click **New > Web Service**.
3. Connect your repository.
4. Render should auto-detect the Node environment. Ensure the Build Command is `npm run build` and the Start Command is `npm run start`.
5. Click **Create Web Service**.

## Project Structure
- `/src/app`: Next.js App Router pages, layouts, globals, sitemap, robots, and error handling.
- `/src/components/layout`: Core structural components (Navbar, Footer, PageTransition).
- `/src/components/ui`: Reusable primitives (Buttons, Cards, Tags).
- `/src/lib`: Utilities, animation variants, and global constants.
- `/public/images`: Organized static assets for hero, dishes, and interiors.

## Developed By
Designed & Developed by [NextWebHosting](https://nextwebhostingdev.vercel.app/)
