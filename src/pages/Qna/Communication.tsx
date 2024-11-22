import React from 'react';
import BoardList from '@components/BoardList';
import Pagination from '@components/Pagination';

const Communication: React.FC = () => {
  return (
    <div>
      <h2>Communication</h2>
      <BoardList />
      <Pagination />
    </div>
  );
};
export default Communication;
