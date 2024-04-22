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
      {borderLeft && <div className="w-1 h-20 border-r-[1px] border-gray-5" />}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="flex gap-2 items-center mb-[1.5vw] text-[1vw]">
          {name}
          {icon}
        </p>
        <p className="text-[2.25vw] font-bold">{children}</p>
      </div>
    </>
  );
};

export default UserInformation;
