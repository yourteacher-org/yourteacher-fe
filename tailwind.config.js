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
      keyframes: {
        'fade-in-to-left': {
          '0%': { transform: 'translateX(7.5rem)', opacity: 0 },
          '80%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-out-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '40%': { transform: 'translateX(-5rem)', opacity: 0 },
          '100%': { transform: 'translateX(-5rem)', opacity: 0 },
        },
        'fade-in-to-right': {
          '0%': { transform: 'translateX(-7.5rem)', opacity: 0 },
          '80%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-out-to-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '40%': { transform: 'translateX(5rem)', opacity: 0 },
          '100%': { transform: 'translateX(5rem)', opacity: 0 },
        },
        'move-up': {
          '0%': { transform: 'translateY(-1px)' },
          '20%': { transform: 'translateY(7.5px)' },
          '80%': { transform: 'translateY(-89px)' },
          '90%': { transform: 'translateY(-79px)' },
          '100%': { transform: 'translateY(-84px)' },
        },
        'move-up-target': {
          '0%': { transform: 'translateY(-1px)' },
          '20%': { transform: 'translateY(7.5px)' },
          '80%': { transform: 'translateY(-101px)' },
          '90%': { transform: 'translateY(-91px)' },
          '100%': { transform: 'translateY(-96px)' },
        },
      },
      animation: {
        'fade-in-to-left': 'fade-in-to-left 0.5s forwards',
        'fade-out-to-left': 'fade-out-to-left 0.5s forwards',
        'fade-in-to-right': 'fade-in-to-right 0.5s forwards',
        'fade-out-to-right': 'fade-out-to-right 0.5s forwards',
        'move-up': 'move-up 2s ease-in-out forwards',
        'move-up-target': 'move-up-target 2s ease-in-out forwards',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        'black-2': '#2C2C2C',
        'gray-1': '#909090',
        'gray-2': '#494949',
        'gray-3': '#585858',
        'gray-4': '#B3B3B3',
        'gray-5': '#D9D9D9',
        'gray-6': '#DBDBDB',
        'gray-7': '#ECECEC',
        'gray-8': '#F1F1F1',
        green: '#3ECE9E',
        'green-1': '#011811',
        'green-2': '#2B413A',
        'green-3': '#788E88',
        yellow: '#FFD72E',
        red: '#E93D3D',
        pink: '#FF727A',
        'kakao-yellow': '#FAE100',
        'google-gray': '#F3F3F3',
        'naver-green': '#1EC800',
      },
      dropShadow: {
        green: '5px 5px 10px #3ECE9E',
      },
    },
  },
  plugins: [],
};
