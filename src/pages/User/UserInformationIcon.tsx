import { ReactNode } from 'react';

interface UserInformationIconProps {
  icon?: ReactNode;
  color?: 'red' | 'gray' | 'green';
}

const UserInformationIcon = ({
  icon,
  color = 'gray',
}: UserInformationIconProps) => {
  const colorSet = {
    red: 'bg-red',
    gray: 'bg-gray-7',
    green: 'bg-green',
  };

  return (
    <i
      className={`xl:w-7 lg:w-6 sm:w-3
        aspect-square
        flex items-center justify-center
        rounded-full ${colorSet[color]}`}
    >
      {icon}
    </i>
  );
};

export default UserInformationIcon;
