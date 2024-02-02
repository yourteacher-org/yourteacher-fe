import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variants?: 'primary' | 'secondary' | 'white' | 'empty';
  color?: 'black' | 'gray' | 'white';
  shape?: 'rounded' | 'circle';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

type ButtonVariantsType = {
  [key in Exclude<ButtonProps['variants'], undefined>]: string;
};

type ButtonTextColorType = {
  [key in Exclude<ButtonProps['color'], undefined>]: string;
};

type ButtonShapeType = {
  [key in Exclude<ButtonProps['shape'], undefined>]: string;
};

type ButtonFontSizeType = {
  [key in Exclude<ButtonProps['size'], undefined>]: string;
};

const buttonVariants: ButtonVariantsType = {
  primary: 'bg-gray-3 hover:brightness-110 active:brightness-90',
  secondary: 'bg-gray-5 hover:brightness-105 active:brightness-95',
  white: 'bg-white hover:brightness-105 active:brightness-95',
  empty: 'active:brightness-90',
};

const buttonTextColor: ButtonTextColorType = {
  black: 'text-black',
  gray: 'text-gray-1',
  white: 'text-white',
};

const buttonShape: ButtonShapeType = {
  rounded: '',
  circle: 'p-[20px] w-[72px]',
};

const buttonSize: ButtonFontSizeType = {
  xl: 'text-xl px-[60px] py-[12px]',
  lg: 'text-2xl px-[45px] py-[20px]',
  md: 'text-xl px-[45px] py-[12px]',
  sm: 'text-xl px-[25px] py-[10px]',
  xs: 'text-lg px-[25px] py-[12px]',
};

const Button = ({
  children,
  variants = 'primary',
  color = 'white',
  shape = 'rounded',
  size = 'lg',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants[variants]} ${buttonTextColor[color]} ${buttonShape[shape]} ${buttonSize[size]}
        rounded-full text-2xl text-white transition`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
