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
    <Link key={id} to={src} className="w-fit">
      <li className="group xl:w-[14vw] lg:w-[12.5rem] sm:w-[9rem] relative">
        <p className="mb-5 xl:text-lg lg:text-[0.875rem] sm:text-[0.625rem]">
          {id}
        </p>
        <p
          className="xl:text-[1.8vw] lg:text-[1.625rem] sm:text-lg
            xl:leading-[2vw]
            xl:mb-5 lg:mb-4 sm:mb-2.5 font-bold line-clamp-1"
        >
          {title}
        </p>
        <p
          className="mb-[1.5vw] lg:mb-8 sm:mb-[1.125rem]
            xl:text-[0.975vw] lg:text-[0.875rem] sm:text-[0.625rem] 
            xl:leading-[1.75vw] lg:leading-[1.625rem] line-clamp-2 break-keep"
        >
          {content}
        </p>
        <p className="xl:text-lg lg:text-[0.875rem] sm:text-[0.625rem]">
          {createdDate}
        </p>
        <Comma
          className="fill-yellow opacity-0
            xl:w-auto lg:w-[3.125rem] sm:w-[2.5rem]
            absolute lg:-bottom-7 sm:-bottom-10
            lg:right-0 sm:right-3
            xl:translate-y-28 lg:translate-y-20 sm:translate-y-5
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
    <Section
      as="section"
      className="
        flex flex-col
        xl:max-w-[1920px] mx-auto
        xl:items-stretch sm:items-center
        xl:px-[16.25rem] lg:px-[1.875rem] sm:px-[1.125rem]
        xl:mb-40 lg:mb-32 sm:mb-20
        lg:py-40 sm:py-24"
    >
      <div className="flex items-center xl:justify-between justify-center xl:mb-5 lg:mb-[3.75rem] sm:mb-[2.25rem]">
        <div>
          <div className="flex items-center xl:justify-normal sm:justify-center gap-x-2 xl:mb-5 lg:mb-[0.5rem]">
            <p className="xl:text-xl lg:text-[1rem] sm:text-[0.75rem] text-green font-bold">
              Announcement
            </p>
            <TwoCircles />
          </div>
          <h1 className="xl:mb-10 xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold">
            공지사항
          </h1>
        </div>
        <div className="xl:block sm:hidden">
          <Button onClick={moveToNotice}>더보기</Button>
        </div>
      </div>
      <ul
        className="lg:w-full sm:w-72
          flex
          lg:justify-normal sm:justify-center
          xl:flex-nowrap sm:flex-wrap
          xl:gap-[5rem] lg:gap-[3.125rem] sm:[1.875rem]
          xl:text-lg"
      >
        {DATA.map((data) => (
          <NoticeCard key={data.id} {...data} />
        ))}
      </ul>

      <Button
        className="xl:hidden lg:mt-[5rem] sm:mt-[2.5rem]"
        onClick={moveToNotice}
      >
        더보기
      </Button>
    </Section>
  );
};

export default NoticeSection;
