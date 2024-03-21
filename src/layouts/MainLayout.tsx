import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import SearchwordSection from '@pages/Home/SearchwordSection';
// import Footer from './Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />    
      <main className="xl:max-w-[1920px] lg:max-w-[1024px] sm:max-w-[390px] mx-auto">
        {children}
      </main>
<!--<Footer /> -->
    </>
  );
};

export default MainLayout;
