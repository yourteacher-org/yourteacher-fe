import Pencil from '@assets/icon/pencil.svg?react';
import Check from '@assets/icon/check.svg?react';
import Exclamation from '@assets/icon/exclamation.svg?react';

interface UserInformationIconProps {
  icon: 'pencil' | 'check' | 'exclamation';
  color?: 'red' | 'gray' | 'green';
}

const ICON_SET = {
  pencil: Pencil,
  check: Check,
  exclamation: Exclamation,
};

const ICON_COLOR_SET = {
  red: 'bg-red',
  gray: 'bg-gray-7',
  green: 'bg-green',
};

const UserInformationIcon = ({
  icon,
  color = 'gray',
}: UserInformationIconProps) => {
  const IconComponent = ICON_SET[icon];

  return (
    <i
      className={`xl:w-7 lg:w-6 sm:w-3
        aspect-square
        flex items-center justify-center
        rounded-full ${ICON_COLOR_SET[color]}`}
    >
      <IconComponent
        className="2xl:w-5 xl:w-5 lg:w-4 sm:w-2
          2xl:h-5 xl:h-5 lg:h-4 sm:h-2"
      />
    </i>
  );
};

export default UserInformationIcon;
