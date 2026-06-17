# Ziramzis - Digital Creator Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS for Ziramzis, a digital creator offering websites, web apps, and portfolio solutions.

## 🚀 Features

- **Responsive Design**: Mobile-first approach for all devices
- **Modern Aesthetics**: Dark theme with vibrant purple and blue gradients
- **Performance Optimized**: Built with Next.js for fast load times
- **SEO Ready**: Meta tags and structured data for search engines
- **WhatsApp Integration**: Direct messaging integration
- **Smooth Animations**: Interactive elements with hover effects
- **One-Page Layout**: Single page with smooth scrolling navigation

## 📋 Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Eye-catching introduction with CTAs
3. **Services** - Four main service offerings
4. **Work** - Featured project showcase
5. **Process** - 5-step workflow visualization
6. **CTA** - Call-to-action section
7. **Footer** - Newsletter signup and links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Deployment Ready**: Vercel optimized

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Tzifas/ziramzis-portfolio.git
cd ziramzis-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
ziramzis-portfolio/
├── components/        # Reusable React components
│   ├── Header.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Work.js
│   ├── Process.js
│   ├── CTA.js
│   └── Footer.js
├── pages/            # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/          # Global styles
│   └── globals.css
├── public/          # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Customization

### Update Contact Information

Edit `components/Header.js`, `components/Hero.js`, `components/CTA.js`, and `components/Footer.js` to update:
- WhatsApp number
- Email address
- Location

### Modify Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#7C3AED',    // Purple
  secondary: '#3B82F6',  // Blue
  dark: '#0F172A',
  'dark-card': '#1E293B',
}
```

### Add Your Projects

Edit the `workSamples` array in `components/Work.js` to showcase your portfolio pieces.

## 📱 Responsive Breakpoints

- Mobile: 320px and up
- Tablet: 768px and up (md)
- Desktop: 1024px and up (lg)

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
vercel
```

Or manually:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on each push

## 📞 Contact

- **WhatsApp**: +254 711 410 442
- **Location**: Mombasa, Kenya
- **Website**: https://ziramzis.vercel.app

## 📄 License

© 2025 Ziramzis. All rights reserved.

## 🤝 Contributing

Feel free to fork this repository and customize it for your needs!
