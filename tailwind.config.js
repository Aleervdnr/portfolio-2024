/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-negro': '#0F0F0F',
        'fondo-negro2': '#1E1E1E',
        "fondo-menu":"#222222",
        "anaranjado" : "#F48572",
        "naranja" : "#f15e44"
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        "theSignature" : ['"TheSignature"'],
      },
      animation: {
        'fadeIn': 'fadeIn 3s ease-out infinite',
        'fadeInLow': 'fadeInLow 5s ease-out',
        'fadeIntro': 'fadeIntro 3s ease',
        'sendEmail': 'leftToRight 10s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity:0 },
          '50%': { opacity:1 },
          '100%': { opacity:0 },
        },
        fadeIntro: {
          '0%': { opacity:0 },
          '100%': { opacity:1 },
        },
        fadeInLow: {
          '0%': { opacity:0 },
          '50%': { opacity:0 },
          '100%': { opacity:1 },
        },
        leftToRight: {
          '0%': { transform: 'translateX(-138px)' },
          '30%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(-138px)'  },
        },
      },
      backgroundImage: {
        'me': "url('./src/assets/me1.jpg')",
        'quinta': "url('./src/assets/quinta.jpg')",
        'bot': "url('./src/assets/bot.jpg')",
      },
      content: {
        'quinta': "url('./src/assets/quinta.jpg')",
        'bot': "url('./src/assets/bot.jpg')",
      },
    },
  },
  plugins: [],
}

// --fondo:#0F0F0F;
// --fondo-header:#222222;
// --color-principal: #F48572;