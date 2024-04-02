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
          w-[20.125rem] h-[22.5rem] ${color}
          group-hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.1)]
          transition-[filter]
          duration-[0.4s]
        `}
      />
      <Icon
        className="
          absolute top-[10.375rem] left-1/2
          -translate-x-1/2 -translate-y-1/2
          group-hover:scale-[1.2]
          ease-in-out
          transition-transform
          duration-[0.4s]
        "
      />
    </span>
  );
};

const Login = () => {
  return (
    <div className=" h-[70vh] mx-[25rem] mt-24 text-center">
      <h1 className="m-8 text-7xl font-bold">LOGIN</h1>
      <p className="text-3xl mb-24">
        유어티처로 로그인하여 더 많은 서비스를 만나보세요.
      </p>
      <div className="flex justify-center gap-20">
        <LoginComma type="kakao" />
        <LoginComma type="google" />
        <LoginComma type="naver" />
      </div>
    </div>
  );
};

export default Login;
