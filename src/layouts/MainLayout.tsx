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
      <main>{children}</main>
      <SearchwordSection />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
