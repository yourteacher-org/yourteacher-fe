import React from 'react';

import Page from '@components/Page';
import ModalProvider from '@components/Modal/ModalProvider';

import './index.css';

const App: React.FC = () => {
  return (
    <div className="font-pretendard h-screen">
      <ModalProvider>
        <Page />
      </ModalProvider>
    </div>
  );
};

export default App;
