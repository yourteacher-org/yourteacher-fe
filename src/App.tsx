import React from 'react';
import Page from './component/Page';
import './index.css';
// import Footer from './layouts/Footer';
// import Navbar from './component/Navbar';

const App: React.FC = () => {
  return (
    <div className="font-pretendard h-screen">
      <Page />
      {/* <Footer />
      <Navbar /> */}
    </div>
  );
};

export default App;
