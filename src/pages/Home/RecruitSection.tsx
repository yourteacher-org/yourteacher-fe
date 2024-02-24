import Section from '@layouts/Section';
import Button from '@components/Button';

import Comma from '@assets/img/button_comma.svg?react';
import TwoCircle from '@assets/icon/two-circle.svg?react';

const DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: 'OOOO어린이집 채용공고 유아부 교사 모집',
  period: '2023.12.14 ~ 2023.10.31',
}));

interface RecruitCardProps {
  id: number;
  isStart: boolean;
  title: string;
  period: string;
}

const RecruitCard = ({ id, isStart, title, period }: RecruitCardProps) => {
  return (
    <li
      key={id}
      className={`group relative
        w-[18.375rem] aspect-square p-[1.875rem]
        border border-black rounded-[1.875rem] text-[1.25rem]
        cursor-pointer ${isStart ? 'col-start-2' : ''}`}
    >
      <p className="mb-4">{String(id).padStart(2, '0')}</p>
      <p className="mb-[3.75rem] text-xl leading-8 break-keep group-hover:font-bold">
        {title}
      </p>
      <p className="mb-1 font-bold">기간</p>
      <p>{period}</p>
      <Comma
        className="absolute -top-10 right-[1.875rem] 
        fill-yellow opacity-0 group-hover:opacity-100
          transition duration-300"
      />
    </li>
  );
};

const RecruitSection = () => {
  return (
    <Section as="section" className="flex py-[6.25rem] px-[16.25rem]">
      <div className="flex-1 w-[25rem]">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[1.25rem] text-green font-bold">Recruitment</p>
          <TwoCircle />
        </div>
        <h1 className="text-[3.75rem] font-bold mb-8">채용 공고</h1>
        <p className="text-2xl leading-[2.375rem] mb-[7.375rem]">
          유어티처는 선생님들의 <br /> 가치있는 도전을 응원합니다.
        </p>
        <Button>더보기</Button>
      </div>
      <ul className="grid grid-rows-2 grid-cols-3 gap-x-[2.5rem] gap-y-[3.125rem] py-2">
        {DATA.map((data, index) => (
          <RecruitCard key={data.id} isStart={index === 0} {...data} />
        ))}
      </ul>
    </Section>
  );
};

export default RecruitSection;
