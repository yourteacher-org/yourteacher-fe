import { useLocation } from 'react-router-dom';

import { categoryInfo, subclassInfo } from '@data/board';

const useBoardSearchParams = () => {
  const location = useLocation();
  const [category, subclass] = location.pathname.split('/').slice(1);
  const categoryTitle = categoryInfo[category];
  const { subclassTitle, description } = subclassInfo[category][subclass];
  const sort = new URLSearchParams(location.search).get('sort');

  return {
    category,
    subclass,
    categoryTitle,
    subclassTitle,
    description,
    sort,
  };
};

export default useBoardSearchParams;
