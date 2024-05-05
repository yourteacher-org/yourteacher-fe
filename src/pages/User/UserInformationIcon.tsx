import SVGIcon, { IconType } from '@components/SVGIcon';
import { SVGProps } from 'react';

interface UserInformationIconProps
  extends Omit<SVGProps<SVGSVGElement>, 'type'> {
  icon: IconType;
  color?: 'red' | 'gray' | 'green';
}

const ICON_COLOR_SET = {
  red: 'bg-red',
  gray: 'bg-gray-7',
  green: 'bg-green',
};

const UserInformationIcon = ({
  icon,
  color = 'gray',
  className,
  ...props
}: UserInformationIconProps) => {
  return (
    <i
      className={`xl:w-7 lg:w-6 sm:w-3
        aspect-square
        flex items-center justify-center
        rounded-full ${ICON_COLOR_SET[color]}`}
    >
      <SVGIcon
        type={icon}
        className={`xl:w-4 lg:w-3 sm:w-2
          xl:h-4 lg:h-3 sm:h-2 ${className}`}
        {...props}
      />
    </i>
  );
};

export default UserInformationIcon;
