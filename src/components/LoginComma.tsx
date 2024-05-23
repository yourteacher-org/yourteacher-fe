import Comma from '@assets/icon/login_comma.svg?react';
import Kakao from '@assets/icon/kakao.svg?react';
import Google from '@assets/icon/google.svg?react';
import Naver from '@assets/icon/naver.svg?react';
import { HTMLAttributes, ReactNode } from 'react';

interface LoginCommaProps {
  type: 'kakao' | 'google' | 'naver';
  className?: HTMLAttributes<HTMLElement>['className'];
  children?: ReactNode;
}

const LOGIN_ICON = {
  kakao: { icon: Kakao, color: 'fill-kakao-yellow' },
  google: { icon: Google, color: 'fill-google-gray' },
  naver: { icon: Naver, color: 'fill-naver-green' },
};

const LoginComma = ({ type, className, children }: LoginCommaProps) => {
  const { icon: Icon, color } = LOGIN_ICON[type];

  return (
    <div className={`group relative cursor-pointer ${className}`}>
      <Comma
        className={`
          ${color}
          w-[100%] h-[100%]
          group-hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.1)]
          transition-[filter] duration-[0.4s]
        `}
      />
      <Icon
        className="
          absolute
          top-[45%] left-1/2
          -translate-x-1/2 -translate-y-1/2
          2xl:[100%] sm:w-[45%]
          group-hover:scale-[1.2]
          transition-transform ease-in-out duration-[0.4s]
        "
      />
      {children}
    </div>
  );
};

export default LoginComma;
