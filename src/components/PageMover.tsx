import ChevronLeftIcon from '@assets/icon/chevron-left.svg?react';
import ChevronRightIcon from '@assets/icon/chevron-right.svg?react';

import Button from './Button';

const PageMover = () => {
  return (
    <div className="flex items-center justify-center gap-20 w-full text-gray-5">
      <button className="flex gap-7 items-center">
        <ChevronLeftIcon className="stroke-gray-5" /> 이전 글
      </button>
      <Button className="text-black text-[1.375rem]">목록으로</Button>
      <button className="flex gap-7 items-center">
        다음 글<ChevronRightIcon className="stroke-gray-5" />
      </button>
    </div>
  );
};

export default PageMover;
