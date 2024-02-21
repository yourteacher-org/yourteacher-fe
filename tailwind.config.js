/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#909090',
        'gray-2': '#494949',
        'gray-3': '#585858',
        'gray-4': '#B3B3B3',
        'gray-5': '#D9D9D9',
        'gray-6': '#DBDBDB',
        'gray-7': '#ECECEC',
        green: '#3ECE9E',
        yellow: '#FFD72E',
      },
      dropShadow: {
        green: '5px 5px 10px #3ECE9E',
      },
      animation: {
        fadein: 'fadein 1s ease-in-out backward',
        fadeout: 'fadeout 1s ease-in-out backward',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
