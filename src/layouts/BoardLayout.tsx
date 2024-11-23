import { ReactNode } from 'react';

import BoardComma from '@assets/icon/board_comma.svg?react';

interface BoardLayoutProps {
  children?: ReactNode;
}

const BoardLayout = ({ children }: BoardLayoutProps) => {
  return (
    <>
      <BoardComma className="absolute xl:top-0 lg:-top-20 xl:left-8 lg:left-12 -z-10 xl:w-auto lg:w-[33.755rem]" />
      <div className="xl:max-w-[1920px] xl:px-[16.25rem] xl:pt-40 lg:pt-24 xl:pb-72 mx-auto">
        {children}
      </div>
    </>
  );
};

export default BoardLayout;
