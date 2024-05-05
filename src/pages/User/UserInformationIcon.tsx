import SVGIcon, { IconType } from '@components/SVGIcon';

interface UserInformationIconProps {
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
        className="2xl:w-5 xl:w-5 lg:w-4 sm:w-2
          2xl:h-5 xl:h-5 lg:h-4 sm:h-2"
      />
    </i>
  );
};

export default UserInformationIcon;
