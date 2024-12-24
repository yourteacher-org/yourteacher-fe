import { HTMLAttributes } from 'react';
import Comma from '@assets/img/button_comma.svg?react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  fillColor?: 'green' | 'gray';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  iconDirection?: 'left' | 'right';
}

type ButtonFontSizeType = {
  [key in Exclude<ButtonProps['size'], undefined>]: string;
};

type ButtonFillColorType = {
  [key in Exclude<ButtonProps['fillColor'], undefined>]: string;
};

type ButtonIconDirectionType = {
  [key in Exclude<ButtonProps['iconDirection'], undefined>]: string;
};

const buttonSize: ButtonFontSizeType = {
  xl: 'text-xl px-14 py-3',
  lg: `xl:min-w-72 xl:px-11 xl:py-5 xl:text-2xl
        lg:min-w-[10.875rem] lg:px-[4.5rem] lg:py-[0.875rem] lg:text-sm
        sm:min-w-[9rem] sm:px-[1.875rem] sm:text-[0.75rem]`,
  md: 'text-xl px-11 py-3',
  sm: 'text-xl px-6 py-2.5',
  xs: 'text-lg px-6 py-3',
};

const fillColorSet: ButtonFillColorType = {
  gray: 'fill-gray-1 group-hover:drop-shadow-gray',
  green: 'fill-green group-hover:drop-shadow-green',
};

const iconDirectionSet: ButtonIconDirectionType = {
  left: 'lg:-left-8 sm:-left-6 xl:group-hover:-translate-x-6 lg:group-hover:-translate-x-3 sm:group-hover:-translate-x-2',
  right:
    'lg:-right-8 sm:-right-6 xl:group-hover:translate-x-6 lg:group-hover:translate-x-3 sm:group-hover:translate-x-2',
};

const Button = ({
  children,
  size = 'lg',
  fillColor = 'green',
  iconDirection = 'right',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonSize[size]} ${className}
        group border border-black rounded-full text-2xl relative`}
      {...props}
    >
      {children}
      <Comma
        className={`${fillColorSet[fillColor]} ${iconDirectionSet[iconDirection]}
          xl:w-[4.625rem] lg:w-[3.125rem] sm:w-[2.5rem]
          absolute xl:top-0 lg:-top-[1rem] sm:-top-[1.375rem]
          transition duration-300`}
      />
    </button>
  );
};

export default Button;
