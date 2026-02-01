/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'x-blue': '#1DA1F2',
        'x-dark': '#15202B',
        'x-darker': '#192734',
        'x-light': '#8899A6',
        'score-s': '#22C55E',
        'score-a': '#84CC16',
        'score-b': '#EAB308',
        'score-c': '#F97316',
        'score-d': '#EF4444',
        'score-f': '#DC2626',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
