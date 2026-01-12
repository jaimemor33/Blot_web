/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        'deep-black': '#050505',
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 60px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
};
