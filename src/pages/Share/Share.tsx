import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

import PageNav from '@components/PageNav';
import BoardLayout from '@layouts/BoardLayout';
import { categoryInfo, subclassInfo } from '@data/board';

const Share = () => {
  const { category } = useParams();
  const location = useLocation();
  const subclass = location.pathname.split('/').at(-1);

  if (
    !category ||
    !subclass ||
    !categoryInfo[category] ||
    !subclassInfo[category][subclass]
  ) {
    return <Navigate to="/" replace />;
  }

  const categoryTitle = categoryInfo[category];
  const { title, description } = subclassInfo[category][subclass];

  return (
    <BoardLayout>
      <PageNav>
        <span>{categoryTitle}</span>
        <span>{title}</span>
      </PageNav>

      <h1>{title}</h1>
      <p>{description}</p>

      <Outlet context={{ category, subclass }} />
    </BoardLayout>
  );
};

export default Share;
