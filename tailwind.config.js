/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0D0D0D',
        'cyber-green': '#39FF14',
        'cyber-pink': '#FF1493',
        'cyber-blue': '#00FFFF',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
