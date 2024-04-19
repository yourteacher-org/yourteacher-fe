import { Children } from 'react';

import Home from '@assets/icon/home.svg?react';

interface PageNavProps {
  children?: JSX.Element | JSX.Element[];
}

const PageNav = ({ children }: PageNavProps) => {
  return (
    <div className="flex gap-2 items-center text-[1rem] mb-4">
      <Home className="mb-[2px]" />
      {children &&
        Children.map(children, (Child) => (
          <>
            <span>{'>'}</span>
            {Child}
          </>
        ))}
    </div>
  );
};

export default PageNav;
