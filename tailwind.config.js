/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '390px', // 모바일 화면
      lg: '1024px', // 데스크톱 화면
      xl: '1280px', // 대형 데스크톱 화면
    },
    extend: {
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
