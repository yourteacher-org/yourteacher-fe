import { useEffect, useState } from 'react';

import Button from '@components/Button';
import Section from '@layouts/Section';
import { mainBackground } from 'src/data/main';

import SlideDot from '@assets/img/slide-dot.svg?react';
import ScrollArrow from '@assets/img/scroll-top-arrrow.svg?react';
import { useNavigate } from 'react-router-dom';

const DURATION = 3000;
const ANIMATION_DURATION = 'duration-[2s]';

const Hero = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);

  const intervalBackground = (clidkedIndex: number) => setIndex(clidkedIndex);

  const moveToCommunicationPage = () => navigate('/qna/communication');

  useEffect(() => {
    const intervalId = setInterval(
      () => (index < 2 ? setIndex(index + 1) : setIndex(0)),
      DURATION,
    );
    return () => clearInterval(intervalId);
  });

  return (
    <Section as="section" className="relative mx-[260px] mb-[1000px]">
      <div className="absolute -left-[165px] -bottom-[32px] cursor-default">
        <span className="inline-block -rotate-90 absolute top-4 right-0">
          SCROLL
        </span>
        <ScrollArrow className="rotate-180" />
      </div>
      <div className="relative">
        {mainBackground.map(({ imgName, imgSrc }, bgIndex) => (
          <img
            key={imgName}
            className={`
                ${index === bgIndex ? 'opacity-100' : 'opacity-0'}
                transition ${ANIMATION_DURATION}
                absolute -top-[368px] left-[250px] -z-50
            `}
            src={imgSrc}
            alt={imgName}
          />
        ))}
        <article className="pt-[375px]">
          <div className="flex items-center gap-3.5">
            {mainBackground.map(({ imgName }, bgIndex) =>
              index === bgIndex ? (
                <SlideDot key={imgName} />
              ) : (
                <button
                  key={imgName}
                  aria-label={`${imgName}-button`}
                  className="inline-block rounded-full w-2.5 h-2.5 bg-gray-7"
                  onClick={() => intervalBackground(bgIndex)}
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
          <Button onClick={moveToCommunicationPage}>소통방으로 이동</Button>
        </article>
      </div>
    </Section>
  );
};

export default Hero;
