import Comma from '@assets/icon/login_comma.svg?react';
import Kakao from '@assets/icon/kakao.svg?react';
import Google from '@assets/icon/google.svg?react';
import Naver from '@assets/icon/naver.svg?react';

interface LoginCommaProps {
  type: 'kakao' | 'google' | 'naver';
}

const LOGIN_ICON = {
  kakao: { icon: Kakao, color: 'fill-kakao-yellow' },
  google: { icon: Google, color: 'fill-google-gray' },
  naver: { icon: Naver, color: 'fill-naver-green' },
};

const LoginComma = ({ type }: LoginCommaProps) => {
  const { icon: Icon, color } = LOGIN_ICON[type];

  return (
    <span className="group inline-block relative cursor-pointer">
      <Comma
        className={`
          ${color}
          2xl:w-[20.125rem] xl:w-[15.75vw] lg:w-[12.5rem] sm:w-[7rem]
          2xl:h-[22.5rem] xl:h-[17.5vw] lg:h-[12.5rem] sm:h-[7rem]
          group-hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.1)]
          transition-[filter]
          duration-[0.4s]
        `}
      />
      <Icon
        className="
          absolute
          2xl:w-[9.5rem] xl:w-[7.25vw] lg:w-[5rem] sm:w-[2.75rem]
          2xl:h-[9,5rem] xl:h-[7.25vw] lg:h-[5rem] sm:h-[2.75rem]
          2xl:top-[10.375rem] xl:top-[8.125vw] lg:top-[5.75rem] sm:top-[3.25rem]
          left-1/2
          -translate-x-1/2 -translate-y-1/2
          group-hover:scale-[1.2]
          transition-transform ease-in-out duration-[0.4s]
        "
      />
    </span>
  );
};

const Login = () => {
  return (
    <div className="xl:h-[70vh] sm:h-[57.5vh] xl:mx-[25rem] mt-24 text-center">
      <h1
        className="
          2xl:mb-8 xl:mb-[1.125vw] lg:mb-[1.5rem] sm:mb-[0.5rem]
          2xl:text-7xl xl:text-[3.5vw] lg:text-5xl sm:text-3xl
          2xl:leading-none xl:leading-[3.5vw] lg:leading-[3.5vw]
          font-bold"
      >
        LOGIN
      </h1>
      <p
        className="
          2xl:text-3xl xl:text-[1.4875vw] lg:text-xl sm:text-sm
          2xl:mb-24 xl:mb-[4.75vw] lg:mb-[3.5rem] sm:mb-[2rem]"
      >
        유어티처로 로그인하여 더 많은 서비스를 만나보세요.
      </p>
      <div
        className="flex justify-center
        2xl:gap-20 xl:gap-[4vw] lg:gap-10 sm:gap-3"
      >
        <LoginComma type="kakao" />
        <LoginComma type="google" />
        <LoginComma type="naver" />
      </div>
    </div>
  );
};

export default Login;
