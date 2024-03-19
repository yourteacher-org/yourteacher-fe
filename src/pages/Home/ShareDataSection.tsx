import Button from '@components/Button';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircles from '@assets/icon/two-circles.svg?react';
import { useState } from 'react';

const numberFormatter = new Intl.NumberFormat('ko-kr', {
  notation: 'standard',
}).format;

const MOCK_SHARE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  type: `자료공유 ${i + 1}`,
  title:
    '유교과 같이 스터디 하실 분 모집합니다. 유교과 같이 스터디 하실 분 모집합니다.',
  views: Math.floor(Math.random() * 100000),
  createdAt: '2023.12.14.',
}));

const ANIMATION_DELAY = 500;
const BOARD_UNIT = 5;

const ANIMATION = {
  FADE_IN_LEFT: 'animate-fade-in-to-left',
  FADE_OUT_LEFT: 'animate-fade-out-to-left',
  FADE_IN_RIGHT: 'animate-fade-in-to-right',
  FADE_OUT_RIGHT: 'animate-fade-out-to-right',
};

const ShareDataSection = () => {
  const [index, setIndex] = useState(0);
  const [trigger, setTrigger] = useState('');

  const CURRENT_INDEX_MOCK_DATA = MOCK_SHARE_DATA.slice(
    index * BOARD_UNIT,
    (index + 1) * BOARD_UNIT,
  );

  const handleClickPrevPage = () => {
    setTimeout(
      () =>
        index < MOCK_SHARE_DATA.length / BOARD_UNIT - 1
          ? setIndex(index + 1)
          : setIndex(0),
      ANIMATION_DELAY,
    );

    setTrigger(ANIMATION.FADE_OUT_LEFT);
    setTimeout(() => setTrigger(ANIMATION.FADE_IN_LEFT), ANIMATION_DELAY);
  };

  const handleClickNextPage = () => {
    setTimeout(
      () =>
        index > 0
          ? setIndex(index - 1)
          : setIndex(MOCK_SHARE_DATA.length / BOARD_UNIT - 1),
      ANIMATION_DELAY,
    );

    setTrigger(ANIMATION.FADE_OUT_RIGHT);
    setTimeout(() => setTrigger(ANIMATION.FADE_IN_RIGHT), ANIMATION_DELAY);
  };

  return (
    <Section
      as="section"
      className="
        relative
        flex xl:flex-row sm:flex-col
        xl:px-[16.25rem] lg:px-[1.875rem] py-32
        xl:gap-[3.25rem]"
    >
      <div className="relative xl:min-w-[23.625rem]">
        <div className="flex items-center xl:justify-normal sm:justify-center gap-x-2 lg:mb-[0.75rem] sm:mb-1">
          <p className="xl:text-xl lg:text-[1rem] sm:text-[0.75rem] text-green font-bold">
            Community
          </p>
          <TwoCircles />
        </div>
        <h1
          className="xl:mb-5 sm:mb-4 xl:text-left sm:text-center
            xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold"
        >
          자료 공유
        </h1>
        <p
          className=" xl:text-left sm:text-center
            xl:mb-[7.875rem] lg:mb-8 sm:mb-5
            xl:text-2xl lg:text-xl sm:text-xs
            xl:leading-[2.375rem]"
        >
          유어티처의 자료공유 게시판에서 <br className="xl:block sm:hidden" />
          선생님들과 다양한 정보를 공유해보세요.
        </p>
        <Button className="xl:block sm:hidden">더 보기</Button>
      </div>

      <div className="relative">
        <ul
          className={`flex flex-col relative 2xl:gap-[1.875rem] xl:gap-[1.45vw] lg:gap-[1rem] sm:gap-[0.625rem]
            xl:mb-auto lg:mb-[2.5rem] sm:mb-[1.875rem]
            2xl:text-xl xl:text-[0.975vw] lg:text-sm sm:text-[0.625rem] ${trigger}`}
        >
          {CURRENT_INDEX_MOCK_DATA.map(
            ({ id, type, title, views, createdAt }) => (
              <li
                key={id}
                className="group relative flex items-center justify-between
                  2xl:w-[60.625rem] xl:w-[100%]
                  2xl:h-[4.375rem] xl:h-[3.85vw] lg:h-[3.125rem] sm:h-12
                  2xl:px-[1.875rem] xl:px-[1.4vw] lg:px-[1.875rem] sm:px-4
                  border border-gray-5 rounded-full
                  cursor-pointer"
              >
                <p
                  className="2xl:mr-[5.625rem] xl:mr-[4.25vw] lg:mr-[6.25rem] sm:mr-[0.625rem]
                    lg:group-hover:mr-[3.75rem]
                    transition-[margin-right] duration-200"
                >
                  {type}
                </p>
                <p className="flex-1 xl:pr-12 sm:pr-2 line-clamp-1">{title}</p>
                <p
                  className="2xl:w-[8.25rem] xl:w-[6.5vw] lg:w-[6.25rem] sm:w-[4.25rem]
                    2xl:mr-[2.625rem] xl:mr-[2vw] lg:mr-[3.75rem] sm:mr-[0.625rem]
                    text-left"
                >
                  조회수: {numberFormatter(views)}
                </p>
                <p
                  className="xl:group-hover:mr-[5rem] lg:group-hover:mr-[3.75rem] sm:group-hover:mr-[3rem]
                    transition-[margin-right] duration-200"
                >
                  {createdAt}
                </p>

                <Comma
                  className="absolute xl:-top-6 lg:-top-7 sm:-top-6 right-2
                    xl:w-[4.75rem] lg:w-[3.25rem] sm:w-[3rem]
                  fill-yellow opacity-0 group-hover:opacity-100
                    transition-opacity duration-200"
                />
              </li>
            ),
          )}
        </ul>

        <Button className="xl:hidden sm:block m-auto">더 보기</Button>
      </div>
      <ChevronButton
        direction="left"
        className="absolute
          xl:top-[50%] lg:top-[10.5rem] sm:top-[9.675rem]
          xl:left-[7.5rem] lg:left-[calc(50%-10rem)] sm:left-[calc(50%-7.5rem)]
          xl:-translate-y-[50%]
        "
        onClick={handleClickPrevPage}
      />
      <ChevronButton
        direction="right"
        className="absolute
          xl:top-[50%] lg:top-[10.5rem] sm:top-[9.675rem]
          xl:right-[7.5rem] xl:left-auto lg:left-[calc(50%+6.675rem)]  sm:left-[calc(50%+5.25rem)]
          xl:-translate-y-[50%]"
        onClick={handleClickNextPage}
      />
    </Section>
  );
};

export default ShareDataSection;
