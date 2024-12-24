import FileIcon from '@assets/icon/file.svg?react';
import Button from '@components/Button';

const WriteBoard = () => {
  return (
    <div>
      <div className="flex text-xl mb-[3.75rem]">
        <div className="flex-[4]">
          <p className="font-bold">
            <span className="text-green">•</span>제목
          </p>
          <div className="ml-5 px-[0.625rem] pt-[1.5625rem] pb-5 border-black border-b-2">
            <input
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="flex-[2]">
          <p className="font-bold">
            <span className="text-green">•</span>게시판 카테고리
          </p>
          <div className="ml-5 px-[0.625rem] pt-[1.5625rem] pb-5 border-black border-b-2">
            <input
              type="text"
              placeholder="게시판을 선택해주세요."
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mb-[3.75rem]">
        <p className="font-bold text-xl">
          <span className="text-green">•</span>내용
        </p>
        <div className="ml-5 w-full h-[545px] border-t-2 border-t-black border-b-[1px]">
          에디터
        </div>
        <div className="ml-5 flex gap-[1.875rem] text-xl px-[0.625rem] py-[1.875rem] border-b-2 border-black">
          <p className="flex gap-1 font-bold">
            <i>
              <FileIcon />
            </i>
            파일 업로드
          </p>
          <p className="text-gray-400">
            파일은 최대 10MB까지 업로드 가능합니다.
          </p>
        </div>
      </div>
      <div className="w-full text-xl mb-[7.5rem]">
        <p className="font-bold">
          <span className="text-green">•</span>해쉬태그
        </p>
        <div className="ml-5 px-[0.625rem] pt-[1.5625rem] pb-5 border-black border-b-2">
          <input
            type="text"
            placeholder="# 태그입력(최대 10개 입력 가능)."
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center gap-[3.125rem]">
        <Button iconDirection="left" fillColor="gray">
          취소하기
        </Button>
        <Button>글 올리기</Button>
      </div>
    </div>
  );
};

export default WriteBoard;
