/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a2e',      // Deep Navy Blue
        'secondary': '#e0e0e0',    // Light Gray for text
        'tertiary': '#16213e',    // Another dark shade
        'accent-pink': '#e94560', // Vibrant Pink/Red
        'accent-cyan': '#00f5d4', // Bright Cyan/Mint
      },
      boxShadow: {
        'glow-pink': '0 0 15px #e94560, 0 0 30px #e94560',
        'glow-cyan': '0 0 15px #00f5d4, 0 0 30px #00f5d4',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}