import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@assets/img/logo193.png';
import Jong from '@assets/img/jong.png';
import Search from '@assets/img/search.png';
import User from '@assets/img/user.png';
import { SUB_MENUS, MENU_PAGE, MENUS, SUB_PAGE } from './Data';

interface NavbarProps {}
// 라는 빈 객체를 타입으로 갖는 인터페이스를 생성하여 Navbar 컴포넌트의 props에 대한 타입을 명시했습니다.

const Navbar: React.FC<NavbarProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className={`${isHomePage ? '' : 'border-b border-gray-400'}`}>
      <nav className="flex items-center top-full">
        <Link to="/">
          <img
            src={Logo}
            alt="유어티쳐"
            className="w-44 h-12 mr-6 ml-7 mt-2 mb-3"
          />
        </Link>

        {/* 주메뉴와 서브메뉴를 묶는 ul 태그 */}
        <ul
          className="flex"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {/* 그리고 로고 같은 경우는 따로 떼어 놓는게 좋음 */}
          {/* 그럼 이 둘을 묶는 태그를 만들어서 거기다 호버 이벤트 처리 */}
          {/* 여기에서 map을 통해 각 주메뉴가 렌더링 */}
          {MENUS.map((menu) => (
            <li key={menu} className="relative">
              {MENU_PAGE[menu] && (
                <Link
                  to={`/${MENU_PAGE[menu].toLowerCase().replace(/\s/g, '')}`}
                  className="ml-1 mr-16 text-18 font-medium"
                >
                  {menu}
                </Link>
              )}
              {/* 그리고 여기에서 그에 대한 서브메뉴가 렌더링 */}
              {isHovered && (
                <ul className="absolute left-1 pt-8 space-y-3 text-16 font-medium">
                  {/* margin을 사용하니 접근이 안 되고,padding을 이용하니 거리만 조절되고 접근이 됨 */}
                  {SUB_MENUS[MENU_PAGE[menu]] &&
                    SUB_MENUS[MENU_PAGE[menu]].map((subMenuItem) => (
                      <li key={subMenuItem}>
                        <Link to={`/${SUB_PAGE[subMenuItem]}`}>
                          {subMenuItem}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="flex items-center ml-auto">
          <li>
            <Link to="/user">
              <img src={User} alt="사용자" className="mr-2 w-7" />
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-14 pr-2">
              로그인 ꞏ
            </Link>
          </li>
          <li>
            <Link to="/signut-up" className="mr-3 text-14 group relative">
              회원가입
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={Jong} alt="알림" className="w-8 mr-4" />
            </Link>
          </li>

          <li>
            <Link to="/search" className="mr-6">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="p-1 pl-2 pr-20 placeholder-black mr-2 text-16 border border-gray-900 rounded-full"
              />

              <img
                src={Search}
                alt="검색 아이콘"
                className="w-6 absolute right-10 top-4 transform translate-y-1/2"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
