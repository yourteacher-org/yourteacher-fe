import Section from '@layouts/Section';
import { useState, useEffect } from 'react';
import Zoom from '@assets/img/zoom.svg';
import ChevronButton from '@components/ChevronButton';
import { MOCK_DATA } from 'src/data/Search';

const SearchwordSection = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isZoom, setIsZoom] = useState(true);
  const totalItems = MOCK_DATA.length;
  const visibleItemCount = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveItem((prevItem) => (prevItem % totalItems) + 1);
      setIsZoom(true);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNextButtonClick = () => {
    setActiveItem((prevItem) => (prevItem === totalItems ? 1 : prevItem + 1));
  };

  const handlePrevButtonClick = () => {
    setActiveItem((prevItem) => (prevItem === 1 ? totalItems : prevItem - 1));
  };

  const handleZoomButonClick = () => {
    setIsZoom(true);
  };

  const renderItems = () => {
    let startIndex = activeItem - Math.floor(visibleItemCount / 2);
    if (startIndex <= 0) {
      startIndex += totalItems;
    } // 현재 보여지는 아이템 목록 생성
    return Array.from({ length: visibleItemCount }, (_, index) => {
      let itemNumber = ((startIndex + index - 1) % totalItems) + 1;
      if (itemNumber === 0) {
        itemNumber = totalItems;
      }
      const isActive = activeItem === itemNumber;
      return (
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
            >
              <img
                src={Zoom}
                alt="링크 아이콘"
                className="rounded-full h-20 ml-14 xl:-translate-y-1 lg:-translate-y-9 sm:-translate-y-6 xl:w-[4rem] lg:w-[3.75rem] sm:w-[1.875rem]"
              />
            </button>
          )}
        </li>
      );
    });
  };

  return (
    <Section
      as="section"
      className="w-full flex xl:flex-row sm:flex-col
        xl:items-center sm:items-center
        xl:px-[16.25rem] lg:mx-w-[80rem] sm:mx-w-[24.375rem]
         py-[6.25rem]
        xl:mb-40 lg:mb-32 sm:mb-20"
    >
      <div className="flex flex-col justify-center items-center min-w-[25rem]">
        <span className="xl:text-[1.25rem] lg:text-[1rem] text-green font-bold">
          Popular Searches
        </span>
        <div className="flex gap-[10px]">
          <h1 className="xl:text-[3.3rem] lg:text-[2.5rem] sm:text-[2rem] font-bold">
            인기 검색어
          </h1>
          <div className=" gap-2 hidden xl:flex">
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
        {renderItems()}

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
