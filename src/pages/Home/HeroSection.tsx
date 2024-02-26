import { useEffect, useState } from 'react';

import Button from '@components/Button';
import Section from '@layouts/Section';
import { mainBackground } from 'src/data/main';

import SlideDot from '@assets/img/slide-dot.svg?react';
import ScrollArrow from '@assets/img/scroll-top-arrrow.svg?react';
import { useNavigate } from 'react-router-dom';

const DURATION = 3000;
const ANIMATION_DURATION = 'duration-[2s]';

const HeroSection = () => {
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
    <Section
      as="section"
      className="relative xl:mx-[16.25rem] lg:mx-[1.875rem] w-full m-auto"
    >
      <div
        className="absolute xl:-left-[10.325rem] xl:-bottom-[2rem]
          lg:right-14 lg:-bottom-5 cursor-default"
      >
        <span className="inline-block -rotate-90 absolute top-4 -left-7">
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
              xl:w-[1338px] lg:w-[785px]
              transition ${ANIMATION_DURATION}
              absolute xl:-top-[23rem] xl:left-[15.625rem] lg:-top-[10rem] lg:-right-[1.75rem]
              -z-50
            `}
            src={imgSrc}
            alt={imgName}
          />
        ))}
        <article className="xl:pt-[23.25rem] lg:pt-[12rem]">
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

          <h1
            className="xl:pt-[3.75rem] lg:pt-20
              xl:text-[5rem] lg:text-[3.75rem]
              xl:leading-[6.25rem] lg:leading-[4.75rem]
            text-white font-bold mix-blend-difference"
          >
            어린이집 · 유치원 선생님의 <br />
            소통 공간
          </h1>

          <p
            className="
              xl:pt-[1.875rem] lg:pt-2.5 pb-[3.125rem]
              xl:text-[1.875rem] lg:text-2xl
              xl:leading-[2.875rem] lg:leading-10
            text-white mix-blend-difference"
          >
            <b>유어티처</b>는 <b>어린이집 · 유치원 선생님</b>을 위한 <br />
            커뮤니티 플랫폼입니다.
          </p>
          <Button onClick={moveToCommunicationPage}>소통방으로 이동</Button>
        </article>
      </div>
    </Section>
  );
};

export default HeroSection;
