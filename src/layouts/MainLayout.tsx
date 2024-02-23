import { ReactNode } from 'react';

import Footer from './Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
