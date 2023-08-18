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
        'fadeIntro': 'fadeIntro 3s ease',
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
      },
      backgroundImage: {
        'me': "url('./src/assets/me1.jpeg')",
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