import React from 'react';
import './index.css';

import Page from '@components/Page';
import ModalProvider from '@components/Modal/ModalProvider';

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
