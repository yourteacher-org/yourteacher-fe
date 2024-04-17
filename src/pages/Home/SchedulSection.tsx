import { useState } from 'react';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';
import schedule from '@assets/img/schedule.png';
import Button from '@components/Button';
import Edu from '@assets/icon/edu.svg?react';
import Date from '@assets/icon/date.svg?react';
import { MOCKAG_SCHEDUL_DATA } from '@data/Schedul';

// const DATA = Array.from({ length: 5 }, (_, i) => ({
//   id: i + 1,
//   title: '2023년 보육교사 자격기준 설명회',
//   contents: [
//     '보육교사 자격기준 세부사항 안내',
//     '보육실습 기준 세부 사항 안내',
//     '보육교사 국가자격증 단체신청 안내',
//   ],
//   applyStartDate: '2023-10-25',
//   applyEndDate: '2023-11-15',
//   eduStartDate: '2023-11-17',
//   eduEndDate: '2023-12-20',
// }));

interface ScheduleDateProps {
  title: string;
  contents: string[];
  applyStartDate: string;
  applyEndDate: string;
  eduStartDate: string;
  eduEndDate: string;
}

const extractDate = (
  dateString: string,
): { year: number; month: number; day: number } => {
  const [year, month, day] = dateString.split('-').map(Number);
  return { year, month, day };
};
const formatDate = (dateString: string): string => {
  const { year, month, day } = extractDate(dateString);
  return `${year}년 ${month}월 ${day}일`;
};

// 날짜 문자열을 '-'를 기준으로 분할하고, 각 부분을 숫자로 변환하여 년, 월, 일을 추출합니다.
// 그런 다음 추출된 값을 사용하여 원하는 형식으로 날짜를 포맷합니다.
// 이 방법을 사용하면 Date 객체를 사용하는 대신 문자열에서 직접 날짜를 추출하여 처리할 수 있습니다.
// split 함수는 문자열을 특정 구분자를 기준으로 나누어 배열로 반환
// '2023-10-25'라는 문자열이 있다면 split 함수를 사용하면 ['2023', '10', '25']와 같은 배열이 생성됩니다.

const ScheduleDate = ({
  title,
  contents,
  applyStartDate,
  applyEndDate,
  eduStartDate,
  eduEndDate,
}: ScheduleDateProps) => {
  return (
    <div
      className="w-[59.625rem] h-[24rem] pt-[5rem]
      border rounded-[3rem] shadow-lg text-center bg-white"
    >
      <h2 className="text-[2rem] pb-2">{title}</h2>
      {contents.map((content) => (
        <p key={content}>{content}</p>
      ))}
      <p className="flex-col">. . .</p>
      <p>
        <Date className="absolute ml-[16.5rem]" />
        신청일자: {formatDate(applyStartDate)} ~ {formatDate(applyEndDate)}
      </p>
      <p>
        <Edu className="absolute ml-[16.5rem]" />
        교육일자: {formatDate(eduStartDate)} ~ {formatDate(eduEndDate)}
      </p>
    </div>
  );
};
// 제목, 내용, 신청일자, 교육일자와 같은 항목들은 독립적인 항목으로 보이지 않고 하나의 섹션에 속하는 내용이다.
// <ul>과 <li> 항목, 할 일 목록 등이 이에 해당
//  제목, 내용, 신청일자, 교육일자와 같은 항목들은 일반적으로 목록으로 나열되지 않는다.
// 이러한 정보들은 하나의 섹션 안에 표시되는 것이 일반적이다.
// 따라서 <div>를 사용하여 섹션을 나타내는 것이 더 적합.

const SchedulSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [renderingData, setRenderingData] = useState(MOCKAG_SCHEDUL_DATA);

  const prevButton = () => {
    const nextRenderingData = [
      renderingData[renderingData.length - 1],
      ...renderingData.slice(1, 4),
    ];

    setRenderingData(nextRenderingData);
    setStartIdx((prevIdx) => (prevIdx === 0 ? 4 : prevIdx - 1));
    // startIdx 값이 0일 때, 즉 첫 번째 네모일 때를 확인합니다.
    // 만약 첫 번째 네모라면, 다음 네모로 이동하는 것이 아니라 마지막 네모로 이동하게 됩니다.
    // 그렇지 않은 경우에는 이전 네모로 이동합니다.
  };

  const nextButton = () => {
    const nextRenderingData = [...renderingData.slice(1, 4), renderingData[0]];

    setRenderingData(nextRenderingData);
    setStartIdx((prevIdx) => (prevIdx === 4 ? 0 : prevIdx + 1));
    // 현재 startIdx 값이 4일 때, 즉 마지막 네모일 때를 확인합니다.
    // 만약 마지막 네모라면, 다음 네모로 이동하는 것이 아니라 첫 번째 네모로 이동하게 됩니다.
    // 그렇지 않은 경우에는 다음 네모로 이동합니다.
  };

  const movement = `translateX(calc(-10.375% - ${startIdx * 1034}px))`;

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
          <div
            className="absolute flex top-0 gap-[5rem] transition-transform duration-700 ease-in-out"
            style={{ transform: movement }}
          >
            {renderingData.map((scheduleData) => (
              <ScheduleDate key={scheduleData.id} {...scheduleData} />
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
      <Button className="-translate-y-[9rem] translate-x-[53rem]">
        더보기
      </Button>
      <div className="absolute -translate-y-[20rem] translate-x-[60rem] flex item-center">
        {MOCKAG_SCHEDUL_DATA.map((data) => (
          <div
            key={data.id}
            className={`w-2 h-2 rounded-full mx-1 ${startIdx === data.id - 1 ? 'bg-green' : 'bg-gray-100'}`}
          />
          // 'mx-[value]'는 좌우 여백을 '[value]'만큼 설정s
        ))}
      </div>
    </Section>
  );
};

export default SchedulSection;
