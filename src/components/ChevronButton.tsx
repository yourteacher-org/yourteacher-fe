import { HTMLAttributes } from 'react';

import ChevronUp from '@assets/icon/chevron-up.svg?react';
import ChevronDown from '@assets/icon/chevron-down.svg?react';
import ChevronLeft from '@assets/icon/chevron-left.svg?react';
import ChevronRight from '@assets/icon/chevron-right.svg?react';

interface ChevronButtonProps extends HTMLAttributes<HTMLButtonElement> {
  direction: 'up' | 'down' | 'left' | 'right';
  borderColor?: 'gray' | 'green';
}

type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

const ChevronSet: {
  [key in ChevronButtonProps['direction']]: SVGType;
} = {
  up: ChevronUp,
  down: ChevronDown,
  left: ChevronLeft,
  right: ChevronRight,
};

const borderColorSet = {
  gray: 'border-gray-6 stroke-gray-6',
  green: 'border-green stroke-green',
};

const ChevronButton = ({
  direction = 'up',
  borderColor = 'gray',
  className,
  ...props
}: ChevronButtonProps) => {
  const Chevron = ChevronSet[direction];
  return (
    <button
      className={`
        ${className} ${borderColorSet[borderColor]}
        group border border-gray-6 rounded-full w-12 h-12
        grid place-content-center
        transition duration-300 hover:bg-green hover:border-green
      `}
      {...props}
    >
      <Chevron
        className={`
          ${borderColorSet[borderColor]}
          transition duration-300 stroke-gray-6 group-hover:stroke-white
        `}
      />
    </button>
  );
};

export default ChevronButton;
