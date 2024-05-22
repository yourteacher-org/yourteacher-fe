import { PropsWithChildren, useEffect, useRef } from 'react';
import Portal from '@components/Portal';
import useModalContext from './ModalContext';

const Modal = ({ children }: PropsWithChildren) => {
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
    }

    return () => target?.removeEventListener('click', handler);
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
            min-w-[56.25rem] h-[28.75rem]
            rounded-[2.5rem] overflow-hidden
            bg-white"
        >
          {children}
        </div>
      </>
    </Portal>
  );
};

export default Modal;
