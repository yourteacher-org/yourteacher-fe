import { ReactNode } from 'react';

interface BoardLayoutProps {
  children?: ReactNode;
}

const BoardLayout = ({ children }: BoardLayoutProps) => {
  return (
    <div className="">
      <h1>BoardLayout</h1>
      {children}
    </div>
  );
};

export default BoardLayout;
