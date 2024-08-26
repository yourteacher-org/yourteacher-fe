import { ReactNode } from 'react';

import Button from '@components/Button';
import { numberFormatter } from '@utils/formatter';

import TwoCircles from '@assets/icon/two-circles.svg?react';
import Comma from '@assets/img/button_comma.svg?react';

interface CommunityDataType {
  id: number;
  type: string;
  title: string;
  views: number;
  createdAt: string;
}

interface CommunityContentProps {
  CommunityTitle: ReactNode;
  description: ReactNode;
  shareData: CommunityDataType[];
}

const CommunityContent = ({
  CommunityTitle,
  description,
  shareData,
}: CommunityContentProps) => {
  return (
    <>
      <div className="relative xl:min-w-[23.625rem]">
        <div className="flex items-center xl:justify-normal sm:justify-center gap-x-2 lg:mb-[0.75rem] sm:mb-1">
          <p className="xl:text-xl lg:text-[1rem] sm:text-[0.75rem] text-green font-bold">
            Community
          </p>
          <TwoCircles />
        </div>
        <h1
          className="xl:mb-5 sm:mb-4 xl:text-left sm:text-center
            xl:text-[3.75rem] lg:text-[2.5rem] sm:text-[2rem] font-bold"
        >
          {CommunityTitle}
        </h1>
        <p
          className=" xl:text-left sm:text-center
            xl:mb-[7.875rem] lg:mb-8 sm:mb-5
            xl:text-2xl lg:text-xl sm:text-xs
            xl:leading-[2.375rem]"
        >
          {description}
        </p>
        <Button className="xl:block sm:hidden">더 보기</Button>
      </div>

      <div className="relative">
        <ul
          className={`flex flex-col relative 2xl:gap-[1.875rem] xl:gap-[1.45vw] lg:gap-[1rem] sm:gap-[0.625rem]
            xl:mb-auto lg:mb-[2.5rem] sm:mb-[1.875rem]
            2xl:text-xl xl:text-[0.975vw] lg:text-sm sm:text-[0.625rem]`}
        >
          {shareData.map(({ id, type, title, views, createdAt }) => (
            <li
              key={id}
              className="group relative flex items-center justify-between
                  2xl:w-[60.625rem] xl:w-[100%]
                  2xl:h-[4.375rem] xl:h-[3.85vw] lg:h-[3.125rem] sm:h-12
                  2xl:px-[1.875rem] xl:px-[1.4vw] lg:px-[1.875rem] sm:px-4
                  border border-gray-5 rounded-full
                  cursor-pointer"
            >
              <p
                className="2xl:mr-[5.625rem] xl:mr-[4.25vw] lg:mr-[6.25rem] sm:mr-[0.625rem]
                    lg:group-hover:mr-[3.75rem]
                    transition-[margin-right] duration-200"
              >
                {type}
              </p>
              <p className="flex-1 xl:pr-12 sm:pr-2 line-clamp-1">{title}</p>
              <p
                className="2xl:w-[8.25rem] xl:w-[6.5vw] lg:w-[6.25rem] sm:w-[4.25rem]
                    2xl:mr-[2.625rem] xl:mr-[2vw] lg:mr-[3.75rem] sm:mr-[0.625rem]
                    text-left"
              >
                조회수: {numberFormatter(views)}
              </p>
              <p
                className="xl:group-hover:mr-[5rem] lg:group-hover:mr-[3.75rem] sm:group-hover:mr-[3rem]
                    transition-[margin-right] duration-200"
              >
                {createdAt}
              </p>

              <Comma
                className="absolute xl:-top-6 lg:-top-7 sm:-top-6 right-2
                    xl:w-[4.75rem] lg:w-[3.25rem] sm:w-[3rem]
                  fill-yellow opacity-0 group-hover:opacity-100
                    transition-opacity duration-200"
              />
            </li>
          ))}
        </ul>

        <Button className="xl:hidden sm:block m-auto">더 보기</Button>
      </div>
    </>
  );
};

export default CommunityContent;
