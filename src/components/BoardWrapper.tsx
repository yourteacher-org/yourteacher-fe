import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import PageNav from '@components/PageNav';
import BoardLayout from '@layouts/BoardLayout';
import { CategoryType } from '@/types/board';
import { categoryInfo, subclassInfo } from '@data/board';
import useBoardSearchParams from '@hooks/useBoardSearchParams';

const BOARD_MOCK_DATA = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `테스트 ${i + 1}`,
  author: `작성자 ${i + 1}`,
  created_at: `2024-08-${i}`,
  like_count: Math.floor(Math.random() * 10),
  view_count: Math.floor(Math.random() * 10),
}));

const getBoardMockData: () => Promise<CategoryType['data']> = async () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(BOARD_MOCK_DATA), 500);
  });

const BoardWrapper = () => {
  const [boardData, setBoardData] = useState<CategoryType['data']>([]);
  const { category, categoryTitle, subclass, subclassTitle, description } =
    useBoardSearchParams();

  useEffect(() => {
    (async function () {
      const result = await getBoardMockData();
      setBoardData(result);
    })();
  }, []);

  if (!categoryInfo[category] || !subclassInfo[category][subclass]) {
    return <Navigate to="/" replace />;
  }

  return (
    <BoardLayout>
      <PageNav>
        <span>{categoryTitle}</span>
        <span>{subclassTitle}</span>
      </PageNav>

      <h1>{subclassTitle}</h1>
      <p>{description}</p>

      <Outlet context={{ category, subclass, data: boardData }} />
    </BoardLayout>
  );
};

export default BoardWrapper;
