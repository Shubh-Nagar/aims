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
        // Theme green #11803C — the one green for every solid fill (top bar,
        // buttons, accents). 800–950 stay near-black for heading text and scrims.
        brand: {
          50: '#EDF6F0',
          100: '#D9EEE0',
          200: '#B0DBBF',
          300: '#6CBD8A',
          400: '#1FA04F',
          500: '#11803C',
          600: '#11803C',
          700: '#11803C',
          800: '#103A22',
          900: '#0B2C18',
          950: '#071D10',
        },
        // Amaltas yellow #F9E62D. 600/700 are the same hue darkened so small
        // text and icons stay legible on white (700 ≈ 5:1).
        gold: {
          100: '#FEFCE6',
          200: '#FDF6A8',
          300: '#FBEE6C',
          400: '#FAEA4A',
          500: '#F9E62D',
          600: '#A39400',
          700: '#7A6E00',
        },
        paper: '#FBFAF3',
        surface: '#FFFFFF',
        ink: '#0E2417',
        muted: '#56685B',
        line: '#E6E8DF',
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
        card: '0 1px 2px rgba(11,44,24,.04), 0 12px 32px -12px rgba(11,44,24,.14)',
        lift: '0 24px 60px -22px rgba(11,44,24,.32)',
        ring: '0 0 0 1px rgba(230,232,223,1)',
      },
      backgroundImage: {
        'pine-fade': 'linear-gradient(180deg,#D9EEE0 0%,#B0DBBF 100%)',
        'gold-sweep': 'linear-gradient(105deg,#F9E62D 0%,#FBEE6C 55%,#F9E62D 100%)',
      },
      keyframes: {
        'draw-pulse': { '0%': { strokeDashoffset: '1200' }, '100%': { strokeDashoffset: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'aurora-spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'aurora-slow': 'aurora-spin 46s linear infinite',
        'aurora-slower': 'aurora-spin 62s linear infinite reverse',
        'fade-up': 'fade-up .5s cubic-bezier(.22,1,.36,1) both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,1,.36,1)',
      },
    },
  },
  plugins: [],
}
