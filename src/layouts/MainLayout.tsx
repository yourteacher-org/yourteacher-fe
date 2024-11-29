import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="xl:max-w-full lg:max-w-[1024px] sm:max-w-[390px] xl:min-h-[70vh] mx-auto overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
