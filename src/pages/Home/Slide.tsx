import { ReactNode, useEffect, useState } from 'react';

type SlideIndexType = {
  index: number;
  changeIndex: (clickedIndex: number) => void;
};

interface SlideProps {
  duration: number;
  children: (params: SlideIndexType) => ReactNode;
}

const Slide = ({ duration, children }: SlideProps) => {
  const [index, setIndex] = useState<number>(0);
  const changeIndex = (clickedIndex: number) => setIndex(clickedIndex);

  useEffect(() => {
    const intervalId = setInterval(
      () => (index < 2 ? setIndex(index + 1) : setIndex(0)),
      duration,
    );
    return () => clearInterval(intervalId);
  });

  return children({ index, changeIndex });
};

export default Slide;
