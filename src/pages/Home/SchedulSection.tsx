import { useState } from 'react';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';
import schedule from '@assets/img/schedule.png';
import Button from '@components/Button';
import Edu from '@assets/icon/edu.svg?react';
import Date from '@assets/icon/date.svg?react';
import { MOCKAG_SCHEDUL_DATA } from '@data/Schedul';

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

const ANIMATION_DURATION = 700;

const ANIMATION_DIRECTION = {
  DEFAULT: '',
  NEXT: `-translate-x-[calc(50%+64.625rem)] transition-transform duration-${ANIMATION_DURATION} ease-in-out`,
  PREV: `-translate-x-[calc(50%-64.625rem)] transition-transform duration-${ANIMATION_DURATION} ease-in-out`,
};

const SchedulSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [triggerSlide, setTrigger] = useState(ANIMATION_DIRECTION.DEFAULT);
  const [renderingData, setRenderingData] = useState([
    ...MOCKAG_SCHEDUL_DATA.slice(3),
    ...MOCKAG_SCHEDUL_DATA.slice(0, 3),
  ]);
  const updateDataAfterAnimation = (newIdx: number, direction: string) => {
    setTrigger(direction);
    setTimeout(() => {
      setTrigger(ANIMATION_DIRECTION.DEFAULT);
      if (direction === ANIMATION_DIRECTION.NEXT) {
        setRenderingData([...renderingData.slice(1), renderingData[0]]);
      } else {
        setRenderingData([
          renderingData[renderingData.length - 1],
          ...renderingData.slice(0, renderingData.length - 1),
        ]);
      }
      setStartIdx(newIdx);
    }, ANIMATION_DURATION);
  };

  const prevButton = () => {
    const newIdx =
      startIdx === 0 ? MOCKAG_SCHEDUL_DATA.length - 1 : startIdx - 1;
    updateDataAfterAnimation(newIdx, ANIMATION_DIRECTION.PREV);
  };

  const nextButton = () => {
    const newIdx =
      startIdx === MOCKAG_SCHEDUL_DATA.length - 1 ? 0 : startIdx + 1;
    updateDataAfterAnimation(newIdx, ANIMATION_DIRECTION.NEXT);
  };

  return (
    <Section as="section" className="">
      <div className="relative">
        <img src={schedule} alt="scheduleBG" className="w-[100%]" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20rem] text-center text-[2.875rem] text-white font-bold">
          유어티처는 대한민국 모든
          <br />
          어린이집 유치원 선생님들을 응원합니다
        </p>
        <div className="relative w-[100%] h-[34rem] left-0 bottom-[7rem] overflow-hidden">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2
              flex gap-[5rem]
              ${triggerSlide}`}
          >
            {renderingData.map((scheduleData) => (
              <ScheduleDate key={scheduleData.id} {...scheduleData} />
            ))}
          </div>
          <ChevronButton
            onClick={prevButton}
            direction="left"
            className="absolute left-[calc(50%-27.5rem)] top-[calc(50%-6.25rem)]"
          />
          <ChevronButton
            onClick={nextButton}
            direction="right"
            className="absolute right-[calc(50%-27.5rem)] top-[calc(50%-6.25rem)]"
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
        ))}
      </div>
    </Section>
  );
};

export default SchedulSection;
