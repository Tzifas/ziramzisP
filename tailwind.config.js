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
        primary: '#14B8A6',
        secondary: '#0EA5E9',
        accent: '#FACC15',
        dark: '#020617',
        'dark-card': '#07111C',
        muted: '#94A3B8',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(20,184,166,0.15)',
      },
    },
  },
  plugins: [],
}
