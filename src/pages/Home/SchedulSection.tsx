import { useState } from 'react';
import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';
import schedule from '@assets/img/schedule.png';
import Button from '@components/Button';
import Edu from '@assets/icon/edu.svg?react';
import Dot from '@assets/img/dot.svg?react';
import Date from '@assets/icon/date.svg?react';
import Logo from '@assets/img/schedul-logo.svg?react';
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
      className="xl:w-[59.625rem] lg:w-[38.875rem] sm:w-[20.875rem] xl:h-[24rem] lg:h-[20.625rem] sm:h-[15rem] xl:pt-[2.7rem] lg:pt-[2.5rem] sm:pt-[1.09rem]
      border xl:rounded-[2rem] lg:rounded-[2rem] sm:rounded-[1.5rem] shadow-xl text-center bg-white"
    >
      <h2 className="xl:text-[2rem] lg:text-[1.625rem] sm:text-[1.125rem] font-bold xl:mb-[0.8rem] lg:mb-[1.5rem] sm:mb-[1rem]">
        {title}
      </h2>
      {contents.map((content) => (
        <p
          key={content}
          className="xl:text-[1.25rem] lg:text-[0.875rem] sm:text-[0.625rem] xl:letter-spacing: mt-[0.15rem] lg:letter-spacing: mb-[0.4rem] sm:letter-spacing: mb-[0.01rem]"
        >
          {content}
        </p>
      ))}

      <Dot className="xl:ml-[30rem] lg:ml-[20rem] sm:ml-[10rem] xl:mb-[1rem] sm:mb-[1rem] sm:mt-[1rem]" />
      <div className="xl:text-[1.25rem] lg:text-[0.875rem] sm:text-[0.625rem]">
        <p className="xl:mb-[0.8rem] lg:mb-[0.7rem] sm:mb-[0.6rem]">
          <Date className="absolute xl:w-[1.25rem] lg:w-[1.00375rem] sm:w-[0.908125rem] xl:h-[1.27rem] lg:h-[1.02rem] sm:h-[0.895rem] xl:ml-[14.1rem] lg:ml-[8.25rem] sm:ml-[2rem] xl:mt-[0.1rem] lg:mt-[0.2rem] sm:mt-[0.1rem] " />
          신청일자: {formatDate(applyStartDate)} ~ {formatDate(applyEndDate)}
        </p>
        <p>
          <Edu className="absolute xl:w-[1.5rem] lg:w-[1.1195rem] sm:w-[0.989375rem] xl:h-[1.2775rem] lg:h-[1.02rem] sm:h-[0.875rem] xl:ml-[14.1rem] lg:ml-[8.25rem] sm:ml-[2rem] xl:mt-[0.3rem] lg:mt-[0.2rem] sm:mt-[0.1rem]" />
          교육일자: {formatDate(eduStartDate)} ~{' '}
          {eduEndDate ? formatDate(eduEndDate) : formatDate(eduStartDate)}
        </p>
      </div>
    </div>
  );
};

const ANIMATION_DURATION = 700;

const ANIMATION_DIRECTION = {
  DEFAULT: '',
  NEXT: `xl:-translate-x-[calc(50%+62.9rem)] lg:-translate-x-[calc(50%+39.7rem)] sm:-translate-x-[calc(50%+21.402rem)] transition-transform duration-${ANIMATION_DURATION} ease-in-out`,
  PREV: `xl:-translate-x-[calc(50%-62.9rem)] lg:-translate-x-[calc(50%+39.7rem)] sm:-translate-x-[calc(50%+21.402rem)] transition-transform duration-${ANIMATION_DURATION} ease-in-out`,
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
    <Section
      as="section"
      className="w-full lg:flex-col sm:flex-col
     xl:items-center sm:items-center
    xl:mx-w-[80rem] lg:mx-w-[64rem] sm:mx-w-[24.375rem]
   "
    >
      <div className="relative">
        <img
          src={schedule}
          alt="scheduleBG"
          className="w-[100%] blur-[0.15rem] brightness-75"
        />
        <Logo className="absolute xl:w-[7.69rem] lg:w-[4.92rem] sm:w-[2.40rem] xl:h-[5.56rem] lg:h-[3.56rem] sm:h-[1.74rem] right-1/2 translate-x-1/2 xl:-translate-y-[25rem] lg:-translate-y-[24rem] sm:-translate-y-[22rem] top-1/2" />
        <p className="absolute w-[60rem] h-[10rem] top-1/2 left-1/2 -translate-x-1/2 xl:-translate-y-[19rem] lg:-translate-y-[19.8rem] sm:-translate-y-[19.5rem] text-center xl:text-[2.875rem] lg:text-[2.125rem] sm:text-[1.125rem] text-white font-bold">
          유어티처는 대한민국 모든
          <br />
          어린이집 유치원 선생님들을 응원합니다
        </p>
        <div className="relative w-[100%] h-[34rem] left-0 xl:bottom-[4rem] lg:bottom-[5rem] sm:bottom-[3rem] overflow-hidden">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2
             flex xl:gap-[3.3rem] lg:gap-[0.8rem] sm:gap-[0.5rem]
             ${triggerSlide}`}
          >
            {renderingData.map((scheduleData) => (
              <div key={scheduleData.id} className="slide">
                <ScheduleDate {...scheduleData} />
              </div>
            ))}
          </div>

          <ChevronButton
            onClick={prevButton}
            direction="left"
            className="absolute xl:left-[calc(50%-27.5rem)] lg:left-[calc(50%-18.5rem)] sm:left-[calc(50%-10rem)] xl:top-[calc(50%-6.25rem)] lg:top-[calc(50%-8.5rem)] sm:top-[calc(50%-11rem)]"
          />
          <ChevronButton
            onClick={nextButton}
            direction="right"
            className="absolute xl:right-[calc(50%-27.5rem)] lg:right-[calc(50%-18.5rem)] sm:right-[calc(50%-10rem)] xl:top-[calc(50%-6.25rem)] lg:top-[calc(50%-8.5rem)] sm:top-[calc(50%-11rem)]"
          />

          <div className="absolute right-1/2 translate-x-1/2 ">
            <Button className="xl:translate-y-[29rem] lg:translate-y-[26rem] sm:translate-y-[20rem]">
              더보기
            </Button>
            <div className="flex justify-center xl:translate-y-[20.5rem] lg:translate-y-[18.5rem] sm:translate-y-[14rem]">
              {MOCKAG_SCHEDUL_DATA.map((data, index) => (
                <div
                  key={data.id}
                  className={`rounded-full mx-1 ${startIdx === index ? 'bg-green' : 'bg-gray-200'} ${startIdx === index ? 'xl:w-[0.813rem] lg:w-[0.438rem] sm:w-[0.438rem] xl:h-[0.813rem] lg:h-[0.438rem] sm:h-[0.438rem]' : 'xl:w-[0.563rem] lg:w-[0.303rem] sm:w-[0.303rem] xl:h-[0.563rem] lg:h-[0.303rem] sm:h-[0.303rem]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SchedulSection;
