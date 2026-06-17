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
        primary: '#2DD4BF',
        secondary: '#FACC15',
        dark: '#020617',
        'dark-card': '#0F172A',
      },
    },
  },
  plugins: [],
}
