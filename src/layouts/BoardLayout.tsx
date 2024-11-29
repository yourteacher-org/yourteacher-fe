import { ReactNode } from 'react';

import BoardComma from '@assets/icon/board_comma.svg?react';

interface BoardLayoutProps {
  children?: ReactNode;
}

const BoardLayout = ({ children }: BoardLayoutProps) => {
  return (
    <>
      <BoardComma className="absolute top-0 left-9 -z-10" />
      <div className="xl:px-[16.25rem] xl:pt-40 xl:pb-72">{children}</div>
    </>
  );
};

export default BoardLayout;
