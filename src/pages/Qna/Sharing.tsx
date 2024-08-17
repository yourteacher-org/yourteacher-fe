import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sharing: React.FC = () => {
  const { category, subclass } = useOutletContext<{
    category: string;
    subclass: string;
  }>();
  console.log(category, subclass);

  return (
    <div>
      <h2>Sharing</h2>
    </div>
  );
};

export default Sharing;
