/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: { '2xl': '1921px', sm: '390px' },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        'gray-1': '#909090',
        'gray-2': '#494949',
        'gray-3': '#585858',
        'gray-4': '#B3B3B3',
        'gray-5': '#D9D9D9',
        'gray-6': '#DBDBDB',
        'gray-7': '#ECECEC',
        green: '#3ECE9E',
        'green-1': '#011811',
        'green-2': '#2B413A',
        'green-3': '#788E88',
        yellow: '#FFD72E',
      },
      dropShadow: {
        green: '5px 5px 10px #3ECE9E',
      },
    },
  },
  plugins: [],
};
