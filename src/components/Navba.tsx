import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@assets/img/logo193.png';
import Jong from '@assets/img/jong.png';
import Search from '@assets/img/search.png';
import User from '@assets/img/user.png';
import { SUB_MENUS, MENU_PAGE, MENUS, SUB_PAGE } from '../data/Router';

interface NavbarProps {}

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

        <ul
          className="flex"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {MENUS.map((menu) => (
            <li key={menu} className="relative">
              {MENU_PAGE[menu] && (
                <Link
                  to={`/${MENU_PAGE[menu]}`}
                  className="ml-1 mr-16 text-18 font-medium"
                >
                  {menu}
                </Link>
              )}

              {isHovered && (
                <ul className="absolute left-1 pt-8 space-y-3 text-16 font-medium">
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
            <Link to="/sign-up" className="mr-3 text-14 group relative">
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
