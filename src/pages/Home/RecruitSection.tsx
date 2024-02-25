import Section from '@layouts/Section';
import Button from '@components/Button';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircle from '@assets/icon/two-circle.svg?react';
import { Link } from 'react-router-dom';

const DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title:
    'OOOO어린이집 채용공고 유아부 교사 모집 OOOO 어린이집 채용공고 유아부 교사 모집 ',
  period: '2023.12.14 ~ 2023.10.31',
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
          xl:w-[18.375rem] aspect-square xl:p-[1.875rem]
          lg:w-[14.375rem] lg:p-6
          border border-black rounded-[1.875rem]
          text-[1.25rem] cursor-pointer`}
      >
        <p className="xl:mb-4 lg:mb-5 lg:text-sm">
          {String(id).padStart(2, '0')}
        </p>
        <p
          className="xl:mb-[3.75rem] lg:mb-[3.125rem]
            xl:text-xl lg:text-sm
            xl:leading-8 lg:leading-6
            break-keep line-clamp-2
            transition-[font-weight] duration-300 group-hover:font-bold"
        >
          {title}
        </p>
        <p className="xl:mb-1 lg:mb-2.5 font-bold lg:text-xs">기간</p>
        <p className="lg:text-xs">{period}</p>
        <Comma
          className="absolute -top-10 right-[1.875rem] 
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
      className="flex xl:flex-row xl:items-start lg:flex-col lg:items-center py-[6.25rem] xl:px-[16.25rem]"
    >
      <div className="flex-1 xl:w-[25rem] xl:text-left lg:text-center xl:mb-0 lg:mb-10">
        <div className="flex items-center xl:justify-start lg:justify-center gap-2 mb-2">
          <p className="text-[1.25rem] text-green font-bold">Recruitment</p>
          <TwoCircle />
        </div>
        <h1 className="xl:text-[3.75rem] lg:text-[2.5rem] font-bold xl:mb-8 lg:mb-[1.875rem]">
          채용 공고
        </h1>
        <p className="xl:mb-[7.375rem] lg:mb-[1rem] xl:text-2xl lg:text-[1.25rem] leading-[2.375rem]">
          유어티처는 선생님들의 <br className="xl:block lg:hidden" />
          가치있는 도전을 응원합니다.
        </p>
        <Button className="xl:block lg:hidden">더보기</Button>
      </div>
      <ul
        className="
          xl:grid xl:grid-rows-2 xl:grid-cols-3
          lg:flex lg:flex-wrap
          xl:w-auto lg:w-[46rem] lg:justify-center
          xl:gap-x-[2.5rem] xl:gap-y-[3.125rem] lg:gap-x-5 lg:gap-y-5 py-2"
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
