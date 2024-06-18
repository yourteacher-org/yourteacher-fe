import { Children } from 'react';

import Home from '@assets/icon/home.svg?react';

interface PageNavProps {
  children?: JSX.Element | JSX.Element[];
}

const PageNav = ({ children }: PageNavProps) => {
  return (
    <div
      className="flex gap-2 items-center
        xl:mb-4 sm:mb-2
        text-[1rem]"
    >
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
