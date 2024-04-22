import { ReactNode } from 'react';

interface UserInformationProps {
  children: ReactNode;
  icon?: ReactNode;
  name: string;
  borderLeft?: boolean;
}

const UserInformation = ({
  children,
  icon,
  name,
  borderLeft,
}: UserInformationProps) => {
  return (
    <>
      {borderLeft && (
        <div
          className="w-1
            lg:h-20 sm:h-14
            border-r-[1px] border-gray-5"
        />
      )}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p
          className="flex items-center
            lg:gap-2 sm:gap-1
            xl:mb-[1.5vw] lg:mb-3 sm:mb-0.5
            xl:text-[1vw] lg:text-[0.875rem] sm:text-[0.675rem]"
        >
          {name}
          {icon}
        </p>
        <p
          className="xl:text-[2.25vw] lg:text-[1.75rem] sm:text-[1rem]
            font-bold"
        >
          {children}
        </p>
      </div>
    </>
  );
};

export default UserInformation;
