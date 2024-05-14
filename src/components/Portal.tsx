import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const container = document.getElementById('modal')!;

  return createPortal(children, container);
};

export default Portal;
