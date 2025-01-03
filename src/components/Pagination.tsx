import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Prev from '@assets/icon/prev.svg';
import Previous from '@assets/icon/previous.svg';
import Daum from '@assets/icon/daum.svg';
import Next from '@assets/icon/next.svg';
import LookPage from '@assets/icon/look-page.svg';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Pagination: React.FC = () => {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState<number[]>([]);
  const itemsPerPage = 5;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const query = useQuery();
  const navigate = useNavigate();
  const currentPage = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    const StartPage =
      Math.floor((currentPage - 1) / itemsPerPage) * itemsPerPage + 1;
    const newVisiblePages = Array.from(
      { length: itemsPerPage },
      (_, i) => StartPage + i,
    ).filter((page) => page <= totalPages);
    setVisiblePageNumbers(newVisiblePages);
  }, [currentPage, itemsPerPage, totalPages]);

  const gotoPage = (page: number) => {
    navigate(`?page=${page}`);
  };
  const gotoNextGroup = () => {
    const nextGroupPage = visiblePageNumbers[0] + itemsPerPage;
    if (nextGroupPage <= totalPages) {
      gotoPage(nextGroupPage);
    }
  };

  const gotoPrevGroup = () => {
    const prevGroupPage = Math.max(1, visiblePageNumbers[0] - itemsPerPage);
    gotoPage(prevGroupPage);
  };

  return (
    <div className="flex items-center justify-center xl:space-x-[0.5rem] lg:space-x-[0.4rem] sm:space-x-[-0.5rem] xl:mt-[3rem] lg:mt-[3rem] sm:mt-[2.5rem]">
      <button
        onClick={gotoPrevGroup}
        disabled={visiblePageNumbers[0] === 1}
        aria-label="5개씩 이전으로 이동"
      >
        <img
          src={Previous}
          alt="5개씩 이전으로"
          className="xl:w-[0.625rem] lg:w-[0.625rem] sm:w-[0.409375rem] xl:h-[0.5625rem] lg:h-[0.5625rem] sm:h-[0.4375rem] xl:mr-[1.6rem] lg:mr-[1.2rem] sm:mr-[2rem]"
        />
      </button>
      <button
        onClick={() => gotoPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="1개씩 이전으로 이동"
      >
        <img
          src={Prev}
          alt="1개씩 이전으로"
          className="xl:mr-[0.9rem] lg:mr-[1rem] sm:mr-[1.2rem] xl:w-[0.3125rem] lg:w-[0.3125rem] sm:w-[0.204375rem] xl:h-[0.5625rem] lg:h-[0.5625rem] sm:h-[0.4375rem]"
        />
      </button>

      {visiblePageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => gotoPage(pageNum)}
          className="relative w-[2.5rem] h-[2.6875rem] xl:text-[1.125rem] lg:text-[1rem] sm:text-[0.625rem] text-gray-500"
        >
          {currentPage === pageNum && (
            <>
              <img
                src={LookPage}
                alt={`Page ${pageNum}`}
                className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] xl:w-[2.5rem] lg:w-[2.5rem] sm:w-[1.3125rem] xl:h-[2.6875rem] lg:h-[2.6875rem] sm:h-[1.4375rem] z-10"
              />
              <span className="relative text-white z-20">{pageNum}</span>
            </>
          )}
          {currentPage !== pageNum && pageNum}
        </button>
      ))}

      <button
        onClick={() => gotoPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="1개씩 이후로 이동"
      >
        <img
          src={Daum}
          alt="1개씩 이후로"
          className="xl:ml-[0.7rem] lg:ml-[1rem] sm:ml-[1.2rem] xl:w-[0.3125rem] lg:w-[0.3125rem] sm:w-[0.204375rem] xl:h-[0.5625rem] lg:h-[0.5625rem] sm:h-[0.4375rem]"
        />
      </button>
      <button
        onClick={gotoNextGroup}
        disabled={
          visiblePageNumbers[visiblePageNumbers.length - 1] >= totalPages
        }
        aria-label="5개씩 이후로 이동"
      >
        <img
          src={Next}
          alt="5개씩 이후로"
          className="xl:w-[0.625rem] lg:w-[0.625rem] sm:w-[0.409375rem] xl:h-[0.5625rem] lg:h-[0.5625rem] sm:h-[0.4375rem] xl:ml-[1.5rem] lg:ml-[1.2rem] sm:ml-[1.9rem]"
        />
      </button>
    </div>
  );
};

export default Pagination;
