import React, { useEffect, useRef, useState } from 'react';
import Option from '@assets/icon/search-option.svg';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@assets/icon/search-input.svg';

const SearchFeature: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectOption] = useState('제목');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (label: string) => {
    setSelectOption(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const filter = selectedOption === '' ? 'title' : 'title_content';
    const query = new URLSearchParams({
      filter,
      search: searchTerm,
    }).toString();
    navigate(`?${query}`);
  };

  return (
    <div className="flex item-center justify-center">
      <div ref={dropdownRef}>
        <button
          className="flex items-center justify-center xl:w-[12.5rem] lg:w-[12.5rem] sm:w-[7.0625rem] xl:h-[3.75rem] lg:h-[2.9375rem] sm:h-[2rem] border border-black rounded-[2rem] bg-white relative z-20"
          onClick={toggleDropdown}
        >
          <span className="xl:w-[12.5rem] lg:w-[12.5rem] sm:w-[7.0625rem] xl:text-[1.25rem] lg:text-[1.125rem] sm:text-[0.75rem] text-left xl:px-[1.6rem] lg:px-[1.25rem] sm:px-[0.9rem]">
            {selectedOption}
          </span>
          <img
            src={Option}
            alt="옵션 버튼"
            className="xl:w-[0.3125rem] lg:w-[0.3125rem] sm:w-[0.25rem] xl:h-[0.5625rem] lg:h-[0.5625rem] sm:h-[0.45rem] xl:mr-[1.5rem] lg:mr-[1.5rem] sm:mr-[1rem]"
          />
        </button>
        {isOpen && (
          <ul className="absolute w-[12.5rem] lg:w-[12.5rem] sm:w-[7.0625rem] xl:h-[11rem] lg:h-[9.5625rem] sm:h-[7.25rem] xl:text-[1.125rem] lg:text-[1rem] sm:text-[0.75rem] border shadow-xl xl:rounded-[2rem] lg:rounded-[1.2rem] sm:rounded-[0.8rem] xl:top-[7.2rem] lg:top-[7.2rem] sm:top-[5.2rem] bg-gray-100 z-10">
            <li>
              <button
                className="w-full xl:py-3 lg:py-3 sm:py-2.5 xl:mt-[3.9rem] lg:mt-[2.9rem] sm:mt-[2rem]"
                onClick={() => handleOptionSelect('제목')}
              >
                제목
              </button>
            </li>
            <li className="border-t border-gray-200">
              <button
                className="w-full xl:py-4 lg:py-4 sm:py-3 xl:pl-1 lg:pl-1 sm:pl-0.5"
                onClick={() => handleOptionSelect('제목+내용')}
              >
                제목 + 내용
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="relative xl:ml-[1.2rem] lg:ml-[1rem] sm:ml-[0.8rem]">
        <input
          type="text"
          className="xl:w-[31.25rem] lg:w-[28.5rem] sm:w-[14.5rem] xl:h-[3.75rem] lg:h-[2.9375rem] sm:h-[2rem] border border-black rounded-[2rem] xl:text-[1.25rem] lg:text-[1rem] sm:text-[0.75rem] xl:px-[1.5rem] xl:px-[1.5rem] sm:px-[0.8rem]"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={handleSearch} aria-label="검색돋보기">
          <img
            src={SearchIcon}
            alt="검색아이콘"
            className="absolute xl:w-[1.875rem] lg:w-[1.875rem] sm:w-[0.9375rem] xl:h-[1.875rem] lg:h-[1.875rem] sm:h-[0.9375rem] xl:right-[1rem] lg:right-[1rem] sm:right-[0.6rem] xl:top-[1rem] lg:top-[0.5rem] sm:top-[0.5rem]"
          />
        </button>
      </div>
    </div>
  );
};
export default SearchFeature;
