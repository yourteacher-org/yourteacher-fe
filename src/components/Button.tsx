import { HTMLAttributes } from 'react';
import Comma from '@assets/img/button_comma.svg?react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

type ButtonFontSizeType = {
  [key in Exclude<ButtonProps['size'], undefined>]: string;
};

const buttonSize: ButtonFontSizeType = {
  xl: 'text-xl px-14 py-3',
  lg: 'text-2xl px-11 py-5 min-w-72',
  md: 'text-xl px-11 py-3',
  sm: 'text-xl px-6 py-2.5',
  xs: 'text-lg px-6 py-3',
};

const Button = ({ children, size = 'lg', ...props }: ButtonProps) => {
  return (
    <button
      className={`${buttonSize[size]}
        group border border-black rounded-full text-xl relative`}
      {...props}
    >
      {children}
      <Comma
        className="absolute top-0 -right-8 fill-green
          transition duration-300
          group-hover:translate-x-6 group-hover:drop-shadow-green"
      />
    </button>
  );
};

export default Button;
