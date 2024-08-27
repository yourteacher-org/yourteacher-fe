import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { CategoryType } from '@/types/board';

const Collection: React.FC = () => {
  const { category, subclass } = useOutletContext<CategoryType>();

  console.log(category, subclass);
  return (
    <div>
      <h2>Collection</h2>
    </div>
  );
};

export default Collection;
