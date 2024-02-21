import React, { useEffect, useState } from 'react';

import Button from '@components/Button';
import { mainBackground } from 'src/data/main';
import SlideDot from '@assets/img/slide-dot.svg?react';

const DURATION = 3000;
const ANIMATION_DURATION = 'duration-[2s]';

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const test = (clidkedIndex: number) => setIndex(clidkedIndex);

  useEffect(() => {
    const intervalId = setInterval(
      () => (index < 2 ? setIndex(index + 1) : setIndex(0)),
      DURATION,
    );
    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative">
      {mainBackground.map(({ imgName, imgSrc }, bgIndex) => (
        <img
          key={imgName}
          className={`
            ${index === bgIndex ? 'opacity-100' : 'opacity-0'}
            transition ${ANIMATION_DURATION}
            absolute -top-[368px] left-[507px]
          `}
          src={imgSrc}
          alt={imgName}
        />
      ))}
      <article className="pt-[375px] px-[260px]">
        <div className="flex items-center gap-3.5">
          {mainBackground.map(({ imgName }, bgIndex) =>
            index === bgIndex ? (
              <SlideDot key={imgName} />
            ) : (
              <button
                key={imgName}
                aria-label={`${imgName}-button`}
                className="inline-block rounded-full w-2.5 h-2.5 bg-gray-7"
                onClick={() => test(bgIndex)}
              />
            ),
          )}
        </div>

        <h1 className="pt-[60px] text-[80px] text-white font-bold mix-blend-difference leading-[100px]">
          어린이집 · 유치원 선생님의 <br />
          소통 공간
        </h1>
        <p className="pt-[30px] pb-[50px] text-[30px] text-white mix-blend-difference leading-[46px]">
          <b>유어티처</b>는 <b>어린이집 · 유치원 선생님</b>을 위한 <br />
          커뮤니티 플랫폼입니다.
        </p>
        <Button>소통방으로 이동</Button>
      </article>
    </div>
  );
};

export default Home;
