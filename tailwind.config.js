/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald-canopy': '#11845B',
        'ocean-teal': '#0E8E8B',
        'ceylon-gold': '#C59D44',
        'night-charcoal': '#1A1A1A',
        'ivory-mist': '#FAF8F5',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}