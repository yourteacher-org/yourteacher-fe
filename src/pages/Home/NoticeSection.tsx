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
      <li className="group xl:w-[18.125rem] lg:w-[12.5rem] relative">
        <p className="mb-5 xl:text-lg lg:text-[0.875rem]">{id}</p>
        <p className="mb-4 xl:text-4xl lg:text-[1.625rem] font-bold line-clamp-1">
          {title}
        </p>
        <p
          className="mb-[1.875rem] xl:text-xl lg:text-[0.875rem]
            xl:leading-9 lg:leading-[1.625rem] line-clamp-2 break-keep"
        >
          {content}
        </p>
        <p className="xl:text-lg lg:text-[0.875rem]">{createdDate}</p>
        <Comma
          className="fill-yellow opacity-0
            xl:w-auto lg:w-[3.125rem]
            absolute -bottom-7 right-0 xl:translate-y-28 lg:translate-y-20
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
    <Section as="section" className="xl:px-[16.25rem] lg:px-[1.875rem] py-32">
      <div className="flex items-center xl:justify-between justify-center xl:mb-5 lg:mb-[3.75rem]">
        <div>
          <div className="flex items-center xl:justify-normal lg:justify-center gap-x-2 xl:mb-5 lg:mb-[0.875rem]">
            <p className="xl:text-xl lg:text-[1rem] text-green font-bold">
              Announcement
            </p>
            <TwoCircles />
          </div>
          <h1 className="xl:mb-10 xl:text-[3.75rem] lg:text-[2.5rem] font-bold">
            공지사항
          </h1>
        </div>
        <div className="xl:block lg:hidden">
          <Button onClick={moveToNotice}>더보기</Button>
        </div>
      </div>
      <ul className="flex xl:gap-[5.625rem] lg:gap-[3.125rem]">
        {DATA.map((data) => (
          <NoticeCard key={data.id} {...data} />
        ))}
      </ul>
      <Button onClick={moveToNotice}>더보기</Button>
    </Section>
  );
};

export default NoticeSection;
