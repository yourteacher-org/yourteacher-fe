import Button from '@components/Button';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircles from '@assets/icon/two-circles.svg?react';
import { useState } from 'react';

const MOCK_SHARE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  type: `자료공유 ${i + 1}`,
  title:
    '유교과 같이 스터디 하실 분 모집합니다. 유교과 같이 스터디 하실 분 모집합니다.',
  views: 684,
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
  const [trigger, setTrigger] = useState(ANIMATION.FADE_IN_LEFT);

  const CURRENT_INDEX_MOCK_DATA = MOCK_SHARE_DATA.slice(
    index * BOARD_UNIT,
    (index + 1) * BOARD_UNIT,
  );

  const prevPage = () => {
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

  const nextPage = () => {
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
        flex xl:flex-row sm:flex-col
        xl:px-[16.25rem] lg:px-[1.875rem] py-32
        xl:gap-[3.25rem]"
    >
      <div className="relative">
        <ChevronButton
          direction="left"
          className="absolute -left-[7.5rem] top-[50%] -translate-y-[50%]"
          onClick={prevPage}
        />

        <div className="flex items-center xl:justify-normal sm:justify-center gap-x-2 lg:mb-[0.75rem]">
          <p className="xl:text-xl lg:text-[1rem] sm:text-[0.75rem] text-green font-bold">
            Community
          </p>
          <TwoCircles />
        </div>
        <h1 className="xl:mb-5 xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold">
          자료 공유
        </h1>
        <p className="xl:text-2xl xl:leading-[2.375rem] xl:mb-[7.875rem]">
          유어티처의 자료공유 게시판에서 <br />
          선생님들과 다양한 정보를 공유해보세요.
        </p>
        <Button>더 보기</Button>
      </div>

      <div className="relative">
        <ul
          className={`flex xl:flex-col relative xl:gap-[1.875rem] xl:text-xl ${trigger}`}
        >
          {CURRENT_INDEX_MOCK_DATA.map(
            ({ id, type, title, views, createdAt }) => (
              <li
                key={id}
                className="group flex justify-between relative 
                xl:w-[60.625rem] xl:py-4 xl:px-[1.875rem]  
                border border-gray-5 rounded-full
                duration-200 cursor-pointer"
              >
                <p className="xl:mr-[5.625rem] group-hover:mr-[3.75rem] transition-[margin-right] duration-200">
                  {type}
                </p>
                <p className="flex-1 line-clamp-1 xl:pr-12">{title}</p>
                <p>조회수: {views}</p>
                <p className="xl:ml-[2.625rem] group-hover:mr-[5rem] transition-[margin-right] duration-200">
                  {createdAt}
                </p>

                <Comma
                  className="block
                  xl:w-[4.75rem] absolute -top-10 right-2
                fill-yellow opacity-0 group-hover:opacity-100
                  transition-opacity duration-200"
                />
              </li>
            ),
          )}
        </ul>
        <ChevronButton
          direction="right"
          className="absolute -right-[7.5rem] top-[50%] -translate-y-[50%]"
          onClick={nextPage}
        />
      </div>
    </Section>
  );
};

export default ShareDataSection;
