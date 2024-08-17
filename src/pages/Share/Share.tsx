import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

import BoardLayout from '@layouts/BoardLayout';
import PageNav from '@components/PageNav';

const categoryInfo: Record<string, string> = {
  share: '정보나눔',
  qna: 'Q&A',
  edu: '교육',
  notice: '공고',
  front: '고객센터',
};

const subclassInfo: Record<string, Record<string, Record<string, string>>> = {
  share: {
    news: {
      title: '보육뉴스',
      description:
        '보육뉴스 게시판은 전국각지의 어린이집 · 유치원 선생님들을 위해 다양한 보육과 관련된 정보들을 알려주는 게시판입니다.',
    },
    collection: {
      title: '자료방',
      description:
        '자료방 게시판은 어린이집 · 유치원 선생님들이 수업하거나 연구에 필요한 자료들을 공유하는 게시판입니다.',
    },
  },
  qna: {
    sharing: {
      title: '자료공유',
      description:
        '자료공유 게시판은 전국각지의 어린이집 · 유치원 선생님과 보육과 관련된 정보들을 공유하는 게시판입니다.',
    },
    communication: {
      title: '소통방',
      description:
        '소통방 게시판은 전국 각지의 어린이집·유치원 선생님들과 자유롭게 소통할 수 있는 게시판입니다.',
    },
    teacher: {
      title: '교사방',
      description:
        '교사방 게시판은 전국 각지의 어린이집·유치원 선생님만의 게시판이며, 교사 인증 시에만 사용할 수 있습니다.',
    },
  },
  edu: {
    date: {
      title: '교육일정',
      description:
        '교육일정은 유치원 · 어린이집 선생님들의 관련 교육일정들을 모아둔 게시판입니다.',
    },
    program: {
      title: '교육프로그램',
      description:
        '교육프로그램 게시판은 유치원 · 어린이집 선생님들의 관련 교육프로그램들을 확인할 수 있습니다.',
    },
  },
};

const Share = () => {
  const { category } = useParams();
  const location = useLocation();
  const subclass = location.pathname.split('/').at(-1);
  console.log(category, subclass);

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
