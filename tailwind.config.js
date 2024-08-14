/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '390px', // 모바일 화면
      lg: '1024px', // 데스크톱 화면
      xl: '1280px', // 대형 데스크톱 화면
      '2xl': '1921px', // 와이드 데스크톱 화면
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        'gray-1': '#909090',
        'gray-2': '#494949',
      },
    },
  },
  plugins: [],
};
