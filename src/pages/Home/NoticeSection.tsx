import Section from '@layouts/Section';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircles from '@assets/icon/two-circles.svg?react';
import Button from '@components/Button';
import { Link, useNavigate } from 'react-router-dom';

const DATA = Array.from({ length: 4 }, (_, i) => ({
  id: String(i + 1).padStart(2, '0'),
  title: '유어티처 오픈입니다.',
  content:
    '유어티처 사이트가 오픈되었습니다. 유어티처는 어린이집 유치원 선생님을 응원합니다.',
  createdDate: '2023.12.13.',
  src: '/',
}));

interface NoticeCardProps {
  id: string;
  title: string;
  content: string;
  createdDate: string;
  src: string;
}

const NoticeCard = ({
  id,
  title,
  content,
  createdDate,
  src,
}: NoticeCardProps) => {
  return (
    <Link key={id} to={src}>
      <li className="group w-[290px] relative">
        <p className="mb-5 text-lg">{id}</p>
        <p className="mb-4 text-4xl font-bold line-clamp-1">{title}</p>
        <p className="mb-[1.875rem] text-xl leading-9 line-clamp-2 break-keep">
          {content}
        </p>
        <p className="text-lg">{createdDate}</p>
        <Comma
          className="fill-yellow opacity-0
            absolute -bottom-7 right-0 translate-y-28
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-[.6s] ease-out"
        />
      </li>
    </Link>
  );
};

const NoticeSection = () => {
  const navigate = useNavigate();
  const moveToNotice = () => navigate('/front/notify');

  return (
    <Section as="section" className="px-[16.25rem] py-32">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-x-2 mb-5">
            <p className="text-xl text-green font-bold">Announcement</p>
            <TwoCircles />
          </div>
          <h1 className="mb-10 text-[60px] font-bold">공지사항</h1>
        </div>
        <div>
          <Button onClick={moveToNotice}>더보기</Button>
        </div>
      </div>
      <ul className="flex gap-[90px]">
        {DATA.map((data) => (
          <NoticeCard key={data.id} {...data} />
        ))}
      </ul>
    </Section>
  );
};

export default NoticeSection;
