import { useParams } from 'react-router-dom';

import ClipIcon from '@assets/icon/clip.svg?react';
import DownloadIcon from '@assets/icon/download.svg?react';

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
    <div>
      <div className="xl:w-[87.5rem] xl:min-h-[81.25rem] border-y-2 border-black">
        <div className="py-10 mb-[3.875rem] border-b-2">
          <p className="mb-8 text-center text-4xl font-bold">
            정보나눔게시판은 정보를 공유하는 게시판입니다.(TEST)
          </p>
          <div className="w-full flex justify-center gap-[3.125rem] text-xl">
            <span>글쓴이 : 김티처</span>
            <span>등록일 : 2024-00-00</span>
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
        <ul className="flex gap-4 mb-[2.5rem]">
          {MOCK_HASHTAGS.map((tag) => (
            <li
              key={tag}
              className="px-[1.5625rem] py-[0.625rem] rounded-full border-2 border-gray-1 text-xl text-gray-1 leading-9"
            >
              # {tag}
            </li>
          ))}
        </ul>
        <div className="flex border-t-2 text-xl py-[2.5rem]">
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
    </div>
  );
};

export default Board;
