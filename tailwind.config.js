/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        pastel: {
          pink: 'var(--pastel-pink)',
          blue: 'var(--pastel-blue)',
          purple: 'var(--pastel-purple)',
          mint: 'var(--pastel-mint)',
          yellow: 'var(--pastel-yellow)',
          peach: 'var(--pastel-peach)',
          lavender: 'var(--pastel-lavender)',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(0, 212, 255, 0.4))' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(0, 212, 255, 0.7))' },
        },
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
};

