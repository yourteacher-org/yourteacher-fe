import { HTMLAttributes, ReactNode, SVGProps } from 'react';

import SVGIcon, { IconType } from '@components/SVGIcon';
import { UserInformationStatusType } from '@/types/user';

const ICON_COLOR_SET = {
  red: 'bg-red',
  gray: 'bg-gray-7',
  green: 'bg-green',
};
interface UserInformationProps {
  children: ReactNode;
}

const UserInformationWrapper = ({ children }: UserInformationProps) => {
  return (
    <>
      <div
        className="w-1
          lg:h-20 sm:h-14
          border-r-[1px] border-gray-5
          first-of-type:border-none"
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

interface UserInformationSubProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: ReactNode;
  className?: string;
  modalStatus: UserInformationStatusType;
  onClick?: (value: UserInformationStatusType) => void;
}

export const UserInformationSub = ({
  children,
  className = '',
  onClick,
  modalStatus,
  ...props
}: UserInformationSubProps) => {
  const clickHandler = () => {
    if (onClick) {
      onClick(modalStatus);
    }
  };

  return (
    <button
      {...props}
      onClick={clickHandler}
      className={`group flex items-center
        lg:gap-2 sm:gap-1
        xl:mb-[1.5vw] lg:mb-3 sm:mb-0.5
        cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

interface UserInformationIconProps
  extends Omit<SVGProps<SVGSVGElement>, 'type'> {
  type: IconType;
  color?: 'red' | 'gray' | 'green';
}

const UserInformationIcon = ({
  color = 'gray',
  type,
  className = '',
}: UserInformationIconProps) => {
  return (
    <i
      className={`xl:w-7 lg:w-6 sm:w-3
        aspect-square
        flex items-center justify-center
        rounded-full ${ICON_COLOR_SET[color]} ${className}`}
    >
      <SVGIcon
        type={type}
        className="xl:w-4 lg:w-3 sm:w-2
          group-hover:xl:w-5 group-hover:lg:w-4
          xl:h-4 lg:h-3 sm:h-2
          group-hover:xl:h-5 group-hover:lg:h-4
          transition-all duration-200"
      />
    </i>
  );
};

interface UserInformationLabelProps {
  children?: ReactNode;
  className?: string;
}

const UserInformationLabel = ({
  children,
  className = '',
  ...props
}: UserInformationLabelProps) => {
  return (
    <span
      {...props}
      className={`xl:text-[1vw] lg:text-[0.875rem] sm:text-[0.675rem]
        group-hover:font-bold
        transition-all duration-200
        ${className}`}
    >
      {children}
    </span>
  );
};

interface UserInformationStatusProps {
  children?: ReactNode;
  className?: string;
}

const UserInformationStatus = ({
  children,
  className,
}: UserInformationStatusProps) => {
  return (
    <p
      className={`xl:text-[2.25vw] lg:text-[1.75rem] sm:text-[1rem]
        font-bold ${className}`}
    >
      {children}
    </p>
  );
};

const UserInformation = Object.assign(UserInformationWrapper, {
  Icon: UserInformationIcon,
  Label: UserInformationLabel,
  Status: UserInformationStatus,
  SubTitle: UserInformationSub,
});

export default UserInformation;
