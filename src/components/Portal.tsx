import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('container 노드가 존재하지 않습니다.');
  }

  return createPortal(children, container);
};

export default Portal;
