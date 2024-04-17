import Section from '@layouts/Section';
import Button from '@components/Button';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircle from '@assets/icon/two-circle.svg?react';
import { Link } from 'react-router-dom';

const DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title:
    'OOOO어린이집 채용공고 유아부 교사 모집 OOOO 어린이집 채용공고 유아부 교사 모집 ',
  period: '23.12.14 ~ 24.10.31',
  src: '/',
}));

interface RecruitCardProps {
  id: number;
  isStart: boolean;
  title: string;
  period: string;
  src: string;
}

const RecruitCard = ({ id, isStart, title, period, src }: RecruitCardProps) => {
  return (
    <Link className={`${isStart ? 'col-start-2' : ''}`} to={src}>
      <li
        key={id}
        className={`group relative
          lg:block sm:flex
          xl:w-auto xl:max-w-[18.375rem] lg:w-[14.375rem] sm:w-[22.125rem]
          lg:aspect-square
          2xl:p-[1.875rem] xl:p-[1.875em] lg:p-6 sm:p-4
          border border-black rounded-[1.875rem]
          2xl:text-[1.25rem] xl:text-[0.8375vmax] lg:text-[1.25rem] sm:text-[0.625rem] cursor-pointer`}
      >
        <p
          className="xl:mb-[7.5%] lg:mb-5
            2xl:text-[1.25rem] xl:text-[1.25em] lg:text-sm sm:text-[0.625rem]"
        >
          {String(id).padStart(2, '0')}
        </p>
        <p
          className="lg:flex-auto sm:flex-1
            2xl:mb-[4rem] xl:mb-[30.5%] lg:mb-[3.125rem]
            lg:ml-auto sm:ml-3
            lg:mr-auto sm:mr-3
            2xl:text-[1.25rem] xl:text-[1.25em] lg:text-sm sm:text-[0.625rem]
            2xl:leading-8 xl:leading-[160%] lg:leading-6
            break-keep lg:line-clamp-2 sm:line-clamp-1
            transition-[font-weight] duration-300 group-hover:font-bold"
        >
          {title}
        </p>
        <p
          className="2xl:mb-5 xl:mb-[10%] lg:mb-2.5 
            lg:mr-auto sm:mr-1
            2xl:text-[1.25rem] xl:text-[1.25em] lg:text-xs sm:text-[0.625rem] font-bold"
        >
          기간
        </p>
        <p className="2xl:text-[1.125rem] xl:text-[1.125em] lg:text-xs sm:text-[0.625rem]">
          {period}
        </p>
        <Comma
          className="lg:block sm:hidden
            xl:w-auto lg:w-16 absolute -top-10 right-[1.875rem]
          fill-yellow opacity-0 group-hover:opacity-100
            transition-opacity duration-300"
        />
      </li>
    </Link>
  );
};

const RecruitSection = () => {
  return (
    <Section
      as="section"
      className="flex xl:flex-row sm:flex-col
        xl:items-start sm:items-center
        xl:px-[16.25rem] lg:px-[1.875rem] sm:px-[1.125rem]
        py-[6.25rem]
        xl:mb-40 lg:mb-32 sm:mb-20"
    >
      <div
        className="lg:flex-1
          xl:w-[25rem] xl:text-left sm:text-center xl:mb-0 lg:mb-10"
      >
        <div
          className="flex items-center xl:justify-start sm:justify-center
            lg:mb-2 sm:mb-1 gap-2 "
        >
          <p className="xl:text-[1.25rem] lg:text-[1rem] text-green font-bold">
            Recruitment
          </p>
          <TwoCircle />
        </div>
        <h1
          className="xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold
            xl:mb-8 lg:mb-[1.75rem]"
        >
          채용 공고
        </h1>
        <p
          className="xl:mb-[7.375rem] lg:mb-[1rem] sm:mb-3
            xl:text-2xl lg:text-[1.25rem]
            leading-[2.375rem]"
        >
          유어티처는 선생님들의 <br className="xl:block sm:hidden" />
          가치있는 도전을 응원합니다.
        </p>
        <Button className="xl:block sm:hidden">더보기</Button>
      </div>
      <ul
        className="
          xl:grid xl:grid-rows-2 xl:grid-cols-3
          sm:flex sm:flex-wrap
          xl:w-auto lg:w-[46rem] lg:justify-center
          xl:gap-x-[4%] lg:gap-x-5 
          xl:gap-y-[15%] lg:gap-y-5 sm:gap-y-2
          lg:mb-auto sm:mb-5"
      >
        {DATA.map((data, index) => (
          <RecruitCard key={data.id} isStart={index === 0} {...data} />
        ))}
      </ul>
      <Button className="xl:hidden lg:mt-10">더보기</Button>
    </Section>
  );
};

export default RecruitSection;
