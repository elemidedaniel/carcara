/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#f5f0e8',
        cream2: '#ede6d6',
        cream3: '#e0d8c6',
        brown:  '#2c1f14',
        brown2: '#4a3728',
        brown3: '#6b5240',
        brass:  '#b8924a',
        brass2: '#d4aa6a',
        muted:  '#8a7868',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
