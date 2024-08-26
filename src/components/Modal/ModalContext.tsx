import { ReactNode, createContext, useContext } from 'react';

interface ModalContextType {
  isShow: boolean;
  handleIsShow: (status: boolean, options?: { component: ReactNode }) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('There is a component that is not in ModalContext scope.');
  }

  return context;
};

export default useModalContext;
