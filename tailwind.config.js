/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:     '#F5C842',
        secondary:   '#FFD700',
        accent:      '#00F5FF',
        'honey-deep': '#B8860B',
        'honey-mid':  '#D4A017',
        'honey-bright': '#FFF176',
        'navy-deep':  '#050A18',
        'navy-mid':   '#0A1628',
        'navy-card':  '#0D1F3C',
        dark:        '#050A18',
        'dark-card': '#0D1F3C',
      },
      fontFamily: {
        sans:   ['Inter', 'Space Grotesk', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'bee-fly':    'beeFly 8s ease-in-out infinite',
        'hex-float':  'floatHex 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'hex-spin':   'hexRotate 20s linear infinite',
      },
      backgroundImage: {
        'honey-gradient': 'linear-gradient(135deg, #B8860B 0%, #F5C842 50%, #FFD700 100%)',
        'navy-gradient':  'linear-gradient(135deg, #050A18 0%, #0A1628 100%)',
        'glow-honey':     'radial-gradient(ellipse at center, rgba(245,200,66,0.3), transparent)',
      },
    },
  },
  plugins: [],
}
