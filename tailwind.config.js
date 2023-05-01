/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-1': '#2E335A',
        'dark-2': '#454B79',
        'dark-3': '#0C1033',
        'dark-3': '#1D234D',
        'dark-5': '#1C1B33',
        'primary': '#FFFFFF',
        'secondary': '#EBEBF5',
      },
      fontFamily: {
        'sans': ['Roboto' ,'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
