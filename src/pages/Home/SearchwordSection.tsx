import Section from '@layouts/Section';
import { useState, useEffect } from 'react';
import ZoomClick from '@assets/img/ZoomClick.png';
import ChevronButton from '@components/ChevronButton';

const SearchwordSection = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isZoom, setIsZoom] = useState(false);
  const totalItems = 10;
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
    }

    return Array.from({ length: visibleItemCount }, (_, index) => {
      let itemNumber = ((startIndex + index - 1) % totalItems) + 1;

      if (itemNumber === 0) {
        itemNumber = totalItems;
      }

      const isActive = activeItem === itemNumber;

      return (
        <li
          key={itemNumber}
          className={`flex text-l ml-32 transition duration-300 ease-in-out pl-5 mt-5 mb-39 ${
            isActive
              ? 'text-xl font-bold transform scale-125 shadow-lg rounded-full pl-10 h-14 pt-4'
              : 'opacity-30'
          }`}
        >
          {itemNumber}&nbsp; 인기 검색어
          <span className="text-sm pt-1 pl-28 pr-10">조회수: 716</span>
          {isActive && isZoom && (
            <button onClick={handleZoomButonClick} className="mr-1">
              <img
                src={ZoomClick}
                alt="검색 아이콘"
                className="rounded-full w-14 h-14 mb-4 -translate-y-6"
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
      className="flex xl:flex-row sm:flex-col
    xl:items-start sm:items-center
    xl:px-[14rem] lg:px-[1.875rem] sm:px-[1.125rem]
    py-[6.25rem]
    xl:mb-40 lg:mb-32 sm:mb-20"
    >
      <h1
        className="mt-20 xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold
            xl:mb-8 lg:mb-[1.75rem] relative"
      >
        인기 검색어
      </h1>
      <span className="mt-16 absolute -translate-y-5 xl:text-[1.25rem] lg:text-[1rem] text-green font-bold">
        Popular Searches
      </span>
      <div className="flex mt-24 mr-5 hidden lg:flex">
        <ChevronButton
          onClick={handlePrevButtonClick}
          direction="up"
          className="ml-1 mr-1 w-10 h-10"
        />

        <ChevronButton
          onClick={handleNextButtonClick}
          direction="down"
          className="w-10 h-10 ml-1"
        />
      </div>

      <ul className="relative">
        {renderItems()}

        <div
          className="
            w-[100%] h-[100%] top-0 left-0 absolute
            bg-gradient-to-t from-white from-[0%]
            via-transparent via-35%
            to-white to-[100%]"
        />
      </ul>
    </Section>
  );
};

export default SearchwordSection;
