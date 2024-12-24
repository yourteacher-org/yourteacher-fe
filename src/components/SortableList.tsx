import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BoardList from './BoardList';

interface BoardItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
  like_count: number;
  recent_count: number;
}

const BOARD_MOCA_DATA: BoardItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1, // 게시물 ID
  title: `테스트 ${i + 1}`,
  author: `작성자 ${i + 1}`,
  created_at: `2024-08-${i + 1}`,
  view_count: Math.floor(Math.random() * 10),
  like_count: Math.floor(Math.random() * 10),
  recent_count: Math.floor(Math.random() * 10),
}));

const SortableList: React.FC = () => {
  const [searchParams, setSearchPramas] = useSearchParams();
  const [sortedData, setSortedData] = useState<BoardItem[]>([]);

  const sortBy = searchParams.get('sort') || 'like';

  useEffect(() => {
    const getSortedData = () => {
      if (sortBy === 'like') {
        return [...BOARD_MOCA_DATA].sort((a, b) => b.like_count - a.like_count);
      }
      return [...BOARD_MOCA_DATA].sort(
        (a, b) => b.recent_count - a.recent_count,
      );
    };

    setSortedData(getSortedData());
  }, [sortBy]);

  const handleSortChange = (sortOPtion: 'like' | 'recent') => {
    setSearchPramas({ sort: sortOPtion });
  };

  return (
    <div>
      <div className="relative xl:w-[64rem] lg:w-[59rem] sm:w-[22.5rem] mx-auto">
        <div className="absolute xl:right-[-0.3rem] lg:right-1 sm:right-1 xl:top-[-2rem] lg:top-[-2rem] sm:top-2 xl:text-[1.25rem] lg:text-[0.875rem] sm:text-[0.625rem]">
          <button
            className={`xl:px-2 lg:px-3 sm:px-3 ${sortBy === 'like' ? 'text-black' : 'text-gray-200'}`}
            onClick={() => handleSortChange('like')}
          >
            추천순
          </button>
          <span className="text-gray-300">|</span>
          <button
            className={`xl:px-2 lg:px-3 sm:px-3 ${sortBy === 'recent' ? 'text-black' : 'text-gray-200'}`}
            onClick={() => handleSortChange('recent')}
          >
            최신순
          </button>
        </div>

        <BoardList data={sortedData} />
      </div>
    </div>
    // </div>
  );
};
export default SortableList;
