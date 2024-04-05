import { useState, Fragment } from 'react';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';
import schedule from '@assets/img/schedule.png';
import Edu from '@assets/img/Edu.svg?react';
import Date from '@assets/img/Date.svg?react';

const DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: '2023년 보육교사 자격기준 설명회',
  contents: [
    '보육교사 자격기준 세부사항 안내',
    '보육실습 기준 세부 사항 안내',
    '보육교사 국가자격증 단체신청 안내',
  ],
  applyStartDate: '2023-10-25',
  applyEndDate: '2023-11-15',
  eduStartDate: '2023-11-17',
  eduEndDate: '2023-12-20',
}));

interface ScheduleDateProps {
  title: string;
  contents: string[];
  applyStartDate: string;
  applyEndDate: string;
  eduStartDate: string;
  eduEndDate: string;
}
const ScheduleDate = ({
  title,
  contents,
  applyStartDate,
  applyEndDate,
  eduStartDate,
  eduEndDate,
}: ScheduleDateProps) => {
  return (
    <ul
      className="w-[59.625rem] h-[24rem] pt-[5rem]
      border rounded-[3rem] shadow-lg text-center bg-white"
    >
      <h2 className="text-[2rem] pb-2">{title}</h2>
      {contents.map((content) => (
        <Fragment key={content}>
          <li>{content}</li>
        </Fragment>
      ))}
      <li>
        <Date className="absolute ml-[17rem]" />
        신청일자: {applyStartDate} ~ {applyEndDate}
      </li>
      <li>
        <Edu className="absolute ml-[21.2rem]" />
        교육일자: {eduStartDate} ~ {eduEndDate}
      </li>
      {/*  contents 배열의 각 항목을 <li> 요소로 매핑하여 리스트를 생성, 네모 생성 및 스타일 */}
    </ul>
  );
};

const SchedulSection = () => {
  const [startIdx, setStartIdx] = useState(0);

  const prevButton = () => {
    setStartIdx((prevIdx) => (prevIdx === 0 ? DATA.length - 1 : prevIdx - 1));
  };

  const nextButton = () => {
    setStartIdx((prevIdx) => (prevIdx === DATA.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <Section as="section" className="">
      <div className="relative">
        <img src={schedule} alt="scheduleBG" className="w-[100%]" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20rem] text-center text-[2.875rem] text-white font-bold">
          유어티처는 대한민국 모든
          <br />
          어린이집 유치원 선생님들을 응원합니다
        </p>
        <div className="relative w-[100%] h-[34rem] left-0 bottom-[7rem] overflow-hidden">
          <div className="absolute flex w-[150vw] left-[50%] top-0 -translate-x-[50%]  gap-[5rem]">
            {DATA.slice(startIdx, startIdx + 3).map((data) => (
              <ScheduleDate key={data.id} {...data} />
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <ChevronButton
            onClick={prevButton}
            direction="left"
            className="absolute left-[34rem] top-[56%] transform -translate-y-1/2"
          />
          <ChevronButton
            onClick={nextButton}
            direction="right"
            className="absolute right-[34rem] top-[56%] transform -translate-y-1/2"
          />
        </div>
      </div>
      {/* 렌더링
      {...data}는 spread 연산자를 사용하여 data 객체의 모든 속성을 ScheduleDate 컴포넌트에 전달합니다. 
      이것은 ScheduleDate 컴포넌트의 props로 id, title, contents 등의 속성을 전달합니다. 따라서 ScheduleDate 컴포넌트는 이러한 속성을 받아서 해당 데이터를 렌더링하게 됩니다. 
    이를 통해 코드를 더 간결하고 유지보수가 쉽도록 만듭니다. */}
    </Section>
  );
};

export default SchedulSection;
