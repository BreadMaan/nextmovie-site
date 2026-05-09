/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07070a',
        graphite: '#101118',
        mist: '#9da6b8',
        gold: '#c8a96b',
        goldSoft: '#f0d7a0',
        blueIce: '#7fb6ff',
        blueDeep: '#11233c',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 25px 80px rgba(17,35,60,0.35)',
        gold: '0 18px 60px rgba(200,169,107,0.18)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(127,182,255,0.18), transparent 32%), radial-gradient(circle at 80% 15%, rgba(200,169,107,0.16), transparent 24%)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shine: {
          from: { transform: 'translateX(-140%) skewX(-18deg)' },
          to: { transform: 'translateX(280%) skewX(-18deg)' },
        },
      },
    },
  },
  plugins: [],
};
