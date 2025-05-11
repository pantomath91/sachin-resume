const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#EDF2F7',
          100: '#CFDCE8',
          200: '#A7BFDB',
          300: '#7F9ECE',
          400: '#5A7FC0',
          500: '#4066B3',
          600: '#355394',
          700: '#2B4075',
          800: '#1E2D56',
          900: '#152037',
        },
        secondary: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        accent: {
          50: '#F9FAFB',
          100: '#F6E05E',
          200: '#F0CA45',
          300: '#E9AF2D',
          400: '#E29415',
          500: '#DD6B20',
          600: '#C05621',
          700: '#9C4221',
          800: '#7B341E',
          900: '#652B19',
        },
        gray: colors.blueGray,
        black: colors.black,
        white: colors.white,
        amber: colors.amber,
        blue: colors.blue,
        teal: colors.teal,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.emerald
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'header': '0 4px 15px -2px rgba(0, 0, 0, 0.15)',
        'skill-pill': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      transform: ['hover', 'focus'],
      scale: ['hover', 'group-hover'],
      translate: ['group-hover'],
      boxShadow: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
