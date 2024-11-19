import { useParams } from 'react-router-dom';

const Board = () => {
  const { category, subclass, postId } = useParams();

  return (
    <div>
      <p>{category}</p>
      <p>{subclass}</p>
      <p>{postId}</p>
    </div>
  );
};

export default Board;
