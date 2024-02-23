import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="w-[1920px] mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
