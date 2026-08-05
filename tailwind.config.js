/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        // Official theme green (#107E3B) — the institutional voice of the college
        brand: {
          50: '#F2FAF5',
          100: '#DFF4E7',
          200: '#B1E7C6',
          300: '#6ED898',
          400: '#26C564',
          500: '#107E3B',
          600: '#0D6831',
          700: '#0B5126',
          800: '#093C1D',
          900: '#072B15',
          950: '#051B0D',
        },
        // Amaltas — the golden shower blossom the institution is named for
        gold: {
          100: '#FDF3D7',
          200: '#F9E1A0',
          300: '#F4CC63',
          400: '#EDB833',
          500: '#E9A825',
          600: '#C7871A',
          700: '#9C6714',
        },
        paper: '#F6F8F7',
        surface: '#FFFFFF',
        ink: '#0B1D1B',
        muted: '#5A6B68',
        line: '#E2EAE7',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: { eyebrow: '0.18em' },
      boxShadow: {
        card: '0 1px 2px rgba(7,43,21,.04), 0 12px 32px -12px rgba(7,43,21,.14)',
        lift: '0 24px 60px -22px rgba(7,43,21,.32)',
        ring: '0 0 0 1px rgba(226,234,231,1)',
      },
      backgroundImage: {
        'pine-fade': 'linear-gradient(180deg,#DFF4E7 0%,#B1E7C6 100%)',
        'gold-sweep': 'linear-gradient(100deg,#E9A825 0%,#F4CC63 55%,#E9A825 100%)',
      },
      keyframes: {
        'draw-pulse': { '0%': { strokeDashoffset: '1200' }, '100%': { strokeDashoffset: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up .5s cubic-bezier(.22,1,.36,1) both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,1,.36,1)',
      },
    },
  },
  plugins: [],
}
