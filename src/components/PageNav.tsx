import { Children, ReactNode } from 'react';

import Home from '@assets/icon/home.svg?react';

interface PageNavProps {
  children?: ReactNode;
}

const PageNav = ({ children }: PageNavProps) => {
  return (
    <ul className="flex gap-2">
      <Home />
      {Children.map(children, (Child) => (
        <>
          {'>'}
          {Child}
        </>
      ))}
    </ul>
  );
};

export default PageNav;
