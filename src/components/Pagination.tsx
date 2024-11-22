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
    <div className="flex items-center justify-center space-x-[0.4rem]">
      <button
        onClick={gotoPrevGroup}
        disabled={visiblePageNumbers[0] === 1}
        aria-label="5개씩 이전으로 이동"
      >
        <img src={Previous} alt="5개씩 이전으로" className="mr-[1rem]" />
      </button>
      <button
        onClick={() => gotoPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="1개씩 이전으로 이동"
      >
        <img src={Prev} alt="1개씩 이전으로" className="mr-[1.2rem]" />
      </button>

      {visiblePageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => gotoPage(pageNum)}
          className="relative w-[2.5rem] h-[2.6875rem] text-[1.125rem] text-gray-500 top-0.5"
        >
          {currentPage === pageNum && (
            <>
              <img
                src={LookPage}
                alt={`Page ${pageNum}`}
                className="absolute z-10 right-[0.01rem] top-0.5"
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
        <img src={Daum} alt="1개씩 이후로" className="ml-[0.6rem]" />
      </button>
      <button
        onClick={gotoNextGroup}
        disabled={
          visiblePageNumbers[visiblePageNumbers.length - 1] >= totalPages
        }
        aria-label="5개씩 이후로 이동"
      >
        <img src={Next} alt="5개씩 이후로" className="ml-[1rem]" />
      </button>
    </div>
  );
};

export default Pagination;
