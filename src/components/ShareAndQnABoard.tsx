import { useOutletContext } from 'react-router-dom';

import { CategoryType } from '@/types/board';

const ShareAndQnABoard: React.FC = () => {
  const { category, subclass, data } = useOutletContext<CategoryType>();
  console.log(category, subclass);

  return (
    <div>
      {data.length === 0 && <div>It is loading...</div>}
      {data.map(({ id, title, author, created_at, like_count, view_count }) => (
        <div key={id}>
          <div>{id}</div>
          <div>{title}</div>
          <div>{author}</div>
          <div>{created_at}</div>
          <div>{like_count}</div>
          <div>{view_count}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ShareAndQnABoard;
