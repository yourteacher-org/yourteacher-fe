import { useState, useEffect } from 'react';

import Section from '@layouts/Section';
import { MOCK_DATA } from '@data/Search';
import RenderItems from '@data/Render';
import ChevronButton from '@components/ChevronButton';

import Zoom from '@assets/img/zoom.svg?react';
import TwoCircle from '@assets/icon/two-circles.svg?react';

const SearchwordSection = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isZoom, setIsZoom] = useState(true);
  const TOTAL_ITEMS = MOCK_DATA.length;
  const VISIBLE_ITEMS_COUNT = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveItem((prevItem) => (prevItem % TOTAL_ITEMS) + 1);
      setIsZoom(true);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeItem, TOTAL_ITEMS]);

  const handleNextButtonClick = () => {
    setActiveItem((prevItem) => (prevItem === TOTAL_ITEMS ? 1 : prevItem + 1));
  };

  const handlePrevButtonClick = () => {
    setActiveItem((prevItem) => (prevItem === 1 ? TOTAL_ITEMS : prevItem - 1));
  };

  const handleZoomButonClick = () => {
    setIsZoom(true);
  };

  const items = RenderItems(activeItem, VISIBLE_ITEMS_COUNT, TOTAL_ITEMS);

  return (
    <Section
      as="section"
      className="xl:max-w-[1920px] mx-auto flex xl:flex-row sm:flex-col
        xl:items-center sm:items-center
        xl:px-[16.25rem] lg:mx-w-[80rem] sm:mx-w-[24.375rem]
        lg:py-40 sm:py-24"
    >
      <div className="flex flex-col justify-center xl:items-start sm:items-center min-w-[25rem]">
        <div className="flex items-center lg:mb-2 sm:mb-1 gap-2 ">
          <span className="xl:text-[1.25rem] lg:text-[1rem] sm:text-[0.75rem] text-green font-bold">
            Popular Searches
          </span>
          <TwoCircle />
        </div>
        <div className="flex gap-[10px]">
          <h1 className="xl:text-[3.3rem] lg:text-[2.5rem] sm:text-[2rem] font-bold">
            인기 검색어
          </h1>
          <div className="gap-2 mt-3 hidden xl:flex">
            <ChevronButton
              onClick={handlePrevButtonClick}
              direction="up"
              className="w-10 h-10"
            />

            <ChevronButton
              onClick={handleNextButtonClick}
              direction="down"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      <ul className="relative ml-[12rem]">
        {items.map(({ itemNumber, isActive }) => (
          <li
            key={itemNumber}
            className={`mr-[12rem] relative flex items-center justify-between transition duration-300 ease-in-out xl:pl-[4rem] lg:pl-[3rem] sm:pl-[1.5rem] xl:pr-[8.25rem] lg:pr-[5rem] sm:pr-[1rem] my-8 ${
              isActive
                ? 'xl:text-[2rem] lg:text-[1.5rem] sm:text-[1.125rem] font-bold transform scale-125 shadow-lg rounded-full xl:w-[43.75rem] lg:w-[39.675rem] sm:w-[17.700rem] xl:h-[6rem] lg:h-[4.375rem] sm:h-[2.5rem]'
                : 'opacity-30 xl:text-[1.5rem] lg:text-[1.25rem] sm:text-[1rem] pl-[3.5rem] pr-[2.5rem] xl:pr-[1.9rem]'
            }`}
          >
            <div className="flex gap-7">
              <span>{itemNumber}</span>
              <p>{MOCK_DATA[itemNumber - 1].searchWord}</p>
            </div>

            <p className="xl:text-[1.5rem] lg:text-[1.375rem] sm:text-[0.875rem]">
              조회수: {MOCK_DATA[itemNumber - 1].views}
            </p>

            {isActive && isZoom && (
              <button
                onClick={handleZoomButonClick}
                className="absolute right-[1.25rem]"
                aria-label="링크 아이콘"
              >
                <Zoom className="rounded-full h-20 ml-14 xl:-translate-y-1 lg:-translate-y-9 sm:-translate-y-6 xl:w-[4rem] lg:w-[3.75rem] sm:w-[1.875rem]" />
              </button>
            )}
          </li>
        ))}

        <div
          className="
            w-[95.5%] h-[100%] top-0 left-0 absolute
            bg-gradient-to-t from-white from-[0%]
            via-transparent via-35%
            to-white to-[100%]"
        />
      </ul>
    </Section>
  );
};

export default SearchwordSection;
