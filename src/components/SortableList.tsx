import { useState } from 'react';
import BoardList from './BoardList';

interface BoardItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
  like_count: number;
}

const BOARD_MOCA_DATA: BoardItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1, // 게시물 ID
  title: `테스트 ${i + 1}`,
  author: `작성자 ${i + 1}`,
  created_at: `2024-08-${i + 1}`,
  view_count: Math.floor(Math.random() * 10),
  like_count: Math.floor(Math.random() * 10),
}));

const SortableList: React.FC = () => {
  const [sortBy, setSortBy] = useState<'추천순' | '인기순'>('추천순');

  const getSortedData = () => {
    if (sortBy === '추천순') {
      return [...BOARD_MOCA_DATA].sort((a, b) => b.like_count - a.like_count);
    }
    return [...BOARD_MOCA_DATA].sort((a, b) => b.view_count - a.view_count);
  };
  const sortedData = getSortedData();

  return (
    <div className="relative">
      <div className="flex absolute xl:right-1 lg:right-[5.5rem] sm:right-[2.5rem] xl:top-[-2rem] lg:top-[-2rem] sm:top-0 xl:text-[1.25rem] lg:text-[0.825rem] sm:text-[0.625rem]">
        <button
          className={`xl:px-5 lg:px-3 sm:px-3 ${sortBy === '추천순' ? 'text-black' : 'text-gray-200'}`}
          onClick={() => setSortBy('추천순')}
        >
          추천순
        </button>
        <span className="text-gray-300">|</span>
        <button
          className={`xl:px-5 lg:px-3 sm:px-3 ${sortBy === '인기순' ? 'text-black' : 'text-gray-200'}`}
          onClick={() => setSortBy('인기순')}
        >
          인기순
        </button>
      </div>
      <BoardList data={sortedData} />
    </div>
  );
};
export default SortableList;
