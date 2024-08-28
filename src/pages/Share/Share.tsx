import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import PageNav from '@components/PageNav';
import BoardLayout from '@layouts/BoardLayout';
import { CategoryType } from '@/types/board';
import { categoryInfo, subclassInfo } from '@data/board';

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

const Share = () => {
  const [boardData, setBoardData] = useState<CategoryType['data']>([]);

  const location = useLocation();
  const [category, subclass] = location.pathname.split('/').slice(1);
  const categoryTitle = categoryInfo[category];
  const { title, description } = subclassInfo[category][subclass];
  const sort = new URLSearchParams(location.search).get('sort');
  console.log(sort);

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
        <span>{title}</span>
      </PageNav>

      <h1>{title}</h1>
      <p>{description}</p>

      <Outlet context={{ category, subclass, data: boardData }} />
    </BoardLayout>
  );
};

export default Share;
