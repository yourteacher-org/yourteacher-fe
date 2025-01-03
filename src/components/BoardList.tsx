import React from 'react';
import HoverView from '@assets/icon/hover-view.svg';
import Calendar from '@assets/icon/calendar.svg';
import Hits from '@assets/icon/boardlist-hits.svg';
import Good from '@assets/icon/boardlist-good.svg';
import Details from '@assets/icon/board-details.svg';

interface BoardItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  like_count: number;
  view_count: number;
}

interface BoardListProps {
  data: BoardItem[];
}

const BoardList: React.FC<BoardListProps> = ({ data }) => {
  return (
    <table className="w-full border-b-2 border-black xl:w-full lg:w-[59rem] sm:w-[22.25rem]">
      <thead>
        <tr className="flex border-b-2 border-black py-4 xl:text-[1rem] lg:text-[0.875rem]">
          <th className="flex-[4] xl:px-[0rem] lg:px-[0rem] xl:pl-5 hidden lg:block">
            제목
          </th>
          <th className="flex-1 hidden lg:block lg:px-[0rem]">글쓴이</th>
          <th className="flex-1 hidden lg:block lg:px-[0rem]">등록일</th>
          <th className="flex-[0.75] hidden lg:block lg:px-[0rem]">조회수</th>
          <th className="flex-[0.75] hidden lg:block lg:px-[0rem]">추천수</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="flex xl:py-[2rem] lg:py-[1.5rem] xl:text-[1.25rem] lg:text-[1rem] border-b border-gray-200 text-center group/item relative"
          >
            <td className="block lg:hidden px-4 py-[1rem]">
              <div className="font-bold text-left text-[0.75rem] mb-[0.85rem] truncate max-w-[18rem] text-elllipsis overflow-hidden whitespace-nowrap">
                {item.title}
              </div>

              <div className="grid grid-cols-6 text-[0.625rem] text-gray-600">
                <span className="text-left col-span-1">{item.author}</span>
                <div className="flex col-span-1 w-[2.875rem]">
                  <img
                    src={Hits}
                    alt="조회수"
                    className="w-[0.875rem] h-[0.875rem] ml-[0.6rem] mr-[0.25rem]"
                  />
                  <span>{item.view_count}</span>
                </div>
                <div className="flex items-center col-span-1 w-[2.875rem]">
                  <img
                    src={Good}
                    alt="추천수"
                    className="w-[0.875rem] h-[0.875rem] ml-[0.3rem] mr-[0.25rem]"
                  />
                  <span>{item.like_count}</span>
                </div>
                <div className="flex items-center col-span-3 ml-[4.6rem] w-[4.6875rem]">
                  <img
                    src={Calendar}
                    alt="신청일자"
                    className="w-[0.875rem] h-[0.875rem] mr-[0.25rem]"
                  />
                  <span className="col-span-3 text-right">
                    {item.created_at}
                  </span>
                </div>
                <img
                  src={Details}
                  alt="상세보기 버튼"
                  className="absolute w-[1.75rem] h-[1.75rem] right-2 top-[1.65rem]"
                />
              </div>
            </td>

            <td className="flex-[4] pl-5 truncate text-left hidden lg:block">
              {item.title}
            </td>
            <td className="xl:flex-1 lg:flex-1 hidden lg:block xl:group-hover/item:-translate-x-4 transition-transform">
              {item.author}
            </td>
            <td className="xl:flex-1 lg:flex-1 hidden lg:block xl:group-hover/item:-translate-x-4 transition-transform">
              {item.created_at}
            </td>
            <td className="flex-[0.75] lg:flex-[0.75] hidden lg:block xl:group-hover/item:-translate-x-4 transition-transform">
              {item.view_count}
            </td>
            <td className="flex-[0.75] xl:px-[0rem] lg:flex-[0.75] hidden lg:block xl:group-hover/item:-translate-x-4 transition-transform relative">
              {item.like_count}
            </td>
            <td>
              <img
                src={HoverView}
                className="absolute w-[3.8075rem] h-[4.25rem] right-0 top-[0.85rem] opacity-0 group-hover/item:opacity-100 xl:flex lg:hidden sm:hidden"
                alt="호버 표시 아이콘"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BoardList;
