/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'model-s':"url('/tesla/src/images/model-s.jpg')",
        'model-x':"url('/tesla/src/images/model-x.jpg')",
        'model-y':"url('/tesla/src/images/model-y.jpg')",
        'model-3':"url('/tesla/src/images/model-3.jpg')",
        'accessories':"url('/tesla/src/images/accessories.jpg')",
        'solarpanels':"url('/tesla/src/images/solar-panel.jpg')",
        'solarroof':"url('/tesla/src/images/solar-roof.jpg')",
      },
      colors: {
        'gay': 'rgba(23, 26, 32, 0.8)',
        'fuck':'#F4F4F4A6',
      },
      keyframes: {
        jump: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(5px)' },
          '60%': {transform: 'translateY(3px)'},
        }
      },
      animation: {
        jump: 'jump 1.5s infinite',
      },
    },
  },
  plugins: [],
}
