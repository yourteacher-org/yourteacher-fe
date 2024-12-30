import { useParams } from 'react-router-dom';

import ClipIcon from '@assets/icon/clip.svg?react';
import DownloadIcon from '@assets/icon/download.svg?react';
import BookmarkIcon from '@assets/icon/bookmark';
import HeartIcon from '@assets/icon/heart';
import PageMover from '@components/PageMover';

const MOCK_HASHTAGS = [
  '유어티처',
  '어린이집 선생님',
  '유치원 선생님',
  '유아교육',
];

const MOCK_FILES = ['유어티처1', '유어티처2'];

const Board = () => {
  const { category, subclass, postId } = useParams();

  console.log(category, subclass, postId);

  return (
    <div className="mb-32">
      <div className="xl:w-[87.5rem] xl:min-h-[81.25rem] lg:mb-[7.5rem] border-y-2 border-black">
        <div className="relative xl:py-10 lg:py-7 xl:mb-[3.875rem] lg:mb-[1.875rem] border-b-2">
          <BookmarkIcon className="absolute right-5 xl:top-6 lg:top-7" />
          <p className="xl:mb-8 lg:mb-6 text-center xl:text-4xl lg:text-[1.625rem] font-bold">
            정보나눔게시판은 정보를 공유하는 게시판입니다.(TEST)
          </p>
          <div className="w-full flex justify-center xl:gap-[3.125rem] lg:gap-5 xl:text-xl lg:text-[1rem]">
            <span>글쓴이 : 김티처</span>
            <div className="w-[1px] h-auto bg-gray-5" />
            <span>등록일 : 2024-00-00</span>
            <div className="w-[1px] h-auto bg-gray-5" />
            <span>조회소 : 1,582</span>
          </div>
        </div>
        <div className="mb-[3.75rem]">
          <img
            className="mb-[1.125rem]"
            src="https://placehold.co/1400x707"
            alt="main"
          />
          <p className="whitespace-pre-line">
            {`보육뉴스 게시판은 정보를 공유하는 게시판입니다.
              전국각지의 어린이집 · 유치원 선생님들과 다양한 정보를 나눠보세요. (TEST)`}
          </p>
        </div>
        <ul className="relative flex gap-4 xl:mb-[2.5rem] lg:mb-[1.875rem]">
          {MOCK_HASHTAGS.map((tag) => (
            <li
              key={tag}
              className="xl:px-[1.5625rem] lg:px-6 xl:py-[0.625rem] lg:py-3 rounded-full border-2 border-gray-1 text-xl text-gray-1 leading-9"
            >
              # {tag}
            </li>
          ))}
          <div className="absolute bottom-3 right-0 flex flex-col gap-2 items-center">
            <HeartIcon />
            <p>1258</p>
          </div>
        </ul>
        <div className="flex border-t-2 text-xl xl:py-[2.5rem] lg:py-7">
          <div className="flex justify-center gap-[2px] mr-[2.5rem] pl-[1.25rem] font-medium">
            <i>
              <ClipIcon />
            </i>
            <p>첨부파일</p>
          </div>
          <ul className="flex flex-col gap-2">
            {MOCK_FILES.map((file) => (
              <li
                key={file}
                className="flex items-center justify-center gap-[8px]"
              >
                <p>유어티처.pdf</p>
                <i>
                  <DownloadIcon />
                </i>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PageMover />
    </div>
  );
};

export default Board;
