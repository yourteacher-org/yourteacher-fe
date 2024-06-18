import { PropsWithChildren, useMemo, useState } from 'react';

import { ModalContext } from './ModalContext';

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleIsShow = (status: boolean) => {
    setIsShow(status);
  };

  const value = useMemo(() => ({ isShow, handleIsShow }), [isShow]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
