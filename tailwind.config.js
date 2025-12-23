/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#36958F', // Deep Teal - Solid Base
        accent: '#FCCAA3',     // Peach
        foreground: '#ffffff',
        card: '#2d7d78',       // More solid version for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(252, 202, 163, 0.4), 0 0 20px rgba(252, 202, 163, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(252, 202, 163, 0.8), 0 0 40px rgba(252, 202, 163, 0.4)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
}
