import React, { useState } from 'react';
import HoverView from '@assets/icon/hover-view.svg';

interface BoardItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  like_count: number;
  view_count: number;
}

const BOARD_MOCA_DATA: BoardItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `테스트 ${i + 1}`,
  author: `작성자 ${i + 1}`,
  created_at: `2024-08-${i + 1}`,
  view_count: Math.floor(Math.random() * 10),
  like_count: Math.floor(Math.random() * 10),
}));

const BoardList: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center">
      <table className="border-b-2 border-black w-[90.06rem]">
        <thead>
          <tr>
            <th className="border-b-2 border-black text-left min-w-[43.75rem] pl-[20rem] pb-[1rem]">
              제목
            </th>
            <th className="border-b-2 border-black text-center min-w-[10.9375rem] pb-[1rem]">
              글쓴이
            </th>
            <th className="border-b-2 border-black text-center min-w-[10.9375rem] pb-[1rem]">
              등록일
            </th>
            <th className="border-b-2 border-black text-center min-w-[10.9375rem] pb-[1rem]">
              조회수
            </th>
            <th className="border-b-2 border-black text-center min-w-[10.9375rem] pb-[1rem]">
              추천수
            </th>
          </tr>
        </thead>
        <tbody>
          {BOARD_MOCA_DATA.map((item) => (
            <tr
              key={item.id}
              className="h-[6rem] group/item relative"
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className="border-b border-gray-200 pl-[1rem]">
                {item.title}
              </td>
              <td className="border-b border-gray-200 pl-[4rem] group-hover/item:-translate-x-4 transition-transform">
                {item.author}
              </td>
              <td className="border-b border-gray-200 pl-[3.5rem] group-hover/item:-translate-x-4 transition-transform">
                {item.created_at}
              </td>
              <td className="border-b border-gray-200 pl-[5.6rem] group-hover/item:-translate-x-4 transition-transform">
                {item.view_count}
              </td>
              <td className="border-b border-gray-200 pl-[5.8rem] group-hover/item:-translate-x-4 transition-transform relative">
                {item.like_count}
              </td>
              {hoveredRow === item.id && (
                <img
                  src={HoverView}
                  className="absolute w-[3.8075rem] h-[4.25rem] right-0 top-[0.85rem]"
                  alt="호버 표시 아이콘"
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
