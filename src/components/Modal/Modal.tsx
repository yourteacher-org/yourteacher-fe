import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import Portal from '@components/Portal';
import useModalContext from './ModalContext';

const ModalCore = ({ children }: PropsWithChildren) => {
  const { handleIsShow } = useModalContext();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = backdropRef.current;
    const handler: EventListenerOrEventListenerObject = (e) => {
      if (e.target === target) {
        handleIsShow(false);
      }
    };

    if (target) {
      target.addEventListener('click', handler);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      target?.removeEventListener('click', handler);
      document.body.style.overflow = 'auto';
    };
  }, [handleIsShow]);

  return (
    <Portal>
      <>
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
          ref={backdropRef}
        />
        <div
          className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]
            flex flex-col
            min-w-[56.25rem] min-h-[28.75rem]
            rounded-[2.5rem]
            bg-white"
        >
          {children}
        </div>
      </>
    </Portal>
  );
};

interface ModalBottomProps {
  className?: string;
  left: ReactNode;
  right: ReactNode;
}

const ModalBottom = ({ className = '', left, right }: ModalBottomProps) => {
  return (
    <div
      className={`flex h-[7.5rem] border-t-[1px] border-gray-300 text-xl rounded-b-[2.5rem] overflow-hidden ${className}`}
    >
      {left}
      {right}
    </div>
  );
};

const Modal = Object.assign(ModalCore, {
  Bottom: ModalBottom,
});

export default Modal;
