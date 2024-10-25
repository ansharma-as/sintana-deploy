
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        customGrey: '#475965',
        customYellow: '#E7C022'
        
      },
      fontFamily: {
        //sans: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        ...require('tailwindcss/defaultTheme').screens,
        sm1: { min: '0px' ,max: '760px' }, // @media (max-width: 760px)

        
        md1: { min: '760px', max: '815px' }, // @media (min-width: 760px) and (max-width: 815px)
        lg1: { min: '815px', max: '1280px' }, // @media (min-width: 815px) and (max-width: 1280px)
        xl1: { min: '1280px' }, // This is the default Tailwind breakpoint for extra-large screens
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
