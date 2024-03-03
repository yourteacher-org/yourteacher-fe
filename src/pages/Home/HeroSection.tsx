import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Section from '@layouts/Section';
import { mainBackground } from 'src/data/main';

import ScrollArrow from '@assets/img/scroll-top-arrrow.svg?react';
import SlideDot from '@assets/img/slide-dot.svg?react';
import Slide from './Slide';

const ANIMATION_DURATION = 'duration-[2s]';

const HeroSection = () => {
  const navigate = useNavigate();
  const moveToCommunicationPage = () => navigate('/qna/communication');

  return (
    <Section
      as="section"
      className=" w-full relative
        xl:mx-[16.25rem] lg:mx-[1.875rem] sm:mx-[1.125rem]
        xl:mb-60 lg:mb-40 sm:mb-32"
    >
      <div
        className="absolute
          xl:-left-[10.325rem] xl:-bottom-[2rem]
          lg:right-5 lg:-bottom-5
          sm:right-8 sm:-bottom-0
          cursor-default"
      >
        <span className="inline-block -rotate-90 absolute top-4 -left-7">
          SCROLL
        </span>
        <ScrollArrow className="lg:h-auto sm:h-[100px] rotate-180" />
      </div>
      <div className="relative lg:w-auto sm:min-w-[440px] xl:pt-[23.25rem] lg:pt-[12rem]">
        <Slide duration={3000}>
          {({ index, changeIndex }) => (
            <>
              {mainBackground.map(({ imgName, imgSrc }, bgIndex) => (
                <img
                  key={imgName}
                  className={`
                    ${index === bgIndex ? 'opacity-100' : 'opacity-0'}
                    xl:w-[1338px] lg:w-[785px] sm:w-[440px]
                    absolute transition ${ANIMATION_DURATION}
                    xl:-top-[23rem] xl:left-[15.625rem]
                    lg:-top-[10rem] lg:-right-[5.375rem]
                    sm:top-[0.875rem] sm:-right-[1.5rem]
                    -z-50
                  `}
                  srcSet={`${imgSrc[2]} 1024w, ${imgSrc[1]} 1920w, ${imgSrc[0]}`}
                  alt={imgName}
                />
              ))}

              <div className="lg:flex sm:hidden items-center gap-3.5 ">
                {mainBackground.map(({ imgName }, bgIndex) =>
                  index === bgIndex ? (
                    <SlideDot key={imgName} />
                  ) : (
                    <button
                      key={imgName}
                      aria-label={`${imgName}-button`}
                      className="inline-block rounded-full w-2.5 h-2.5 bg-gray-7"
                      onClick={() => changeIndex(bgIndex)}
                    />
                  ),
                )}
              </div>
            </>
          )}
        </Slide>

        <h1
          className="xl:pt-[3.75rem] lg:pt-20 sm:pt-[21.25rem]
              xl:text-[5rem] lg:text-[3.75rem] sm:text-[2.5rem]
              xl:leading-[6.25rem] lg:leading-[4.75rem] sm:leading-[3.125rem]
            text-white font-bold mix-blend-difference"
        >
          어린이집 · <br className="lg:hidden" /> 유치원 선생님의 <br />
          소통 공간
        </h1>

        <p
          className="
              xl:pt-[1.875rem] lg:pt-2.5 sm:pt-4
              lg:pb-[3.125rem] sm:pb-10
              xl:text-[1.875rem] lg:text-2xl sm:text-[1.125rem]
              xl:leading-[2.875rem] lg:leading-10 sm:leading-7
            text-white mix-blend-difference"
        >
          <b>유어티처</b>는 <b>어린이집 · 유치원 선생님</b>을 위한 <br />
          커뮤니티 플랫폼입니다.
        </p>
        <Button onClick={moveToCommunicationPage}>소통방으로 이동</Button>
      </div>
    </Section>
  );
};

export default HeroSection;
