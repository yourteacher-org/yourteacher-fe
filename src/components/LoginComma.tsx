import { HTMLAttributes, ReactNode } from 'react';

import Comma from '@assets/icon/login_comma.svg?react';
import Kakao from '@assets/icon/kakao.svg?react';
import Google from '@assets/icon/google.svg?react';
import Naver from '@assets/icon/naver.svg?react';
import KakaoText from '@assets/img/kakaotalk_text.svg?react';
import GoogleText from '@assets/img/google_text.svg?react';
import NaverText from '@assets/img/naver_text.svg?react';

interface LoginCommaProps {
  type: 'kakao' | 'google' | 'naver';
  className?: HTMLAttributes<HTMLElement>['className'];
  hover?: boolean;
  children?: ReactNode;
}

const LOGIN_ICON = {
  kakao: { icon: Kakao, color: 'fill-kakao-yellow' },
  google: { icon: Google, color: 'fill-google-gray' },
  naver: { icon: Naver, color: 'fill-naver-green' },
};

const LOGIN_TYPE_NAME = {
  kakao: (
    <KakaoText className="lg:block sm:hidden absolute xl:w-auto lg:w-[3.5rem] xl:-right-6 lg:-right-5 xl:bottom-6 lg:bottom-0" />
  ),
  google: (
    <GoogleText className="lg:block sm:hidden absolute xl:w-auto lg:w-[2.25rem] xl:right-2 lg:-right-1 xl:bottom-5 lg:bottom-3" />
  ),
  naver: (
    <NaverText className="lg:block sm:hidden absolute xl:w-auto lg:w-[3rem] xl:-right-3 lg:-right-3 xl:bottom-6 lg:bottom-1" />
  ),
};

const LoginComma = ({ type, className, children, hover }: LoginCommaProps) => {
  const { icon: Icon, color } = LOGIN_ICON[type];

  return (
    <div className="relative">
      <div className={`group relative cursor-pointer ${className}`}>
        <Comma
          className={`w-[100%] h-[100%] ${color}
          ${
            hover
              ? `transition-[filter] duration-[0.4s]
            group-hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.1)]`
              : 'grayscale cursor-default'
          }
        `}
        />
        <Icon
          className={`absolute
            top-[45%] left-1/2
            -translate-x-1/2 -translate-y-1/2
            2xl:[100%] sm:w-[45%]
            ${
              hover
                ? `group-hover:scale-[1.2]
              transition-transform ease-in-out duration-[0.4s]`
                : 'grayscale cursor-default'
            }
        `}
        />
        {LOGIN_TYPE_NAME[type]}
      </div>
      {children}
    </div>
  );
};

export default LoginComma;
