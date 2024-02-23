import React from 'react';
import Page from './component/Page';
import './index.css';
import Footer from './layouts/Footer';

const App: React.FC = () => {
  return (
    <div className="font-pretendard h-screen">
      <Page />
      <Footer />
    </div>
  );
};

export default App;
