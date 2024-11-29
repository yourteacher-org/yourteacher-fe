import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/img/header-logo.svg';
import Jong from '@assets/icon/alert.svg';
import Search from '@assets/icon/search.svg';
import Arrow from '@assets/icon/arrow-user.svg';
import User from '@assets/icon/login-tablet.svg';
import Bg from '@assets/img/submenu-bg.svg';
import Ham from '@assets/icon/menu-ham.svg';
import Close from '@assets/icon/ham-close.svg';
import Circle from '@assets/icon/click-circle.svg';
import Lock from '@assets/icon/header-lock.svg';
import White from '@assets/icon/menu-lock.svg';
import { SUB_MENUS, MENU_PAGE, MENUS, SUB_PAGE } from '@data/header';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setOpenMenu(null);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="group/header relative">
      <nav className="flex items-center justify-center xl:group-hover/header:border-b border-gray-200 opacity-100 group-hover/header:bg-white xl:h-[5.75rem] lg:h-[5.625rem] sm:h-[3.75rem] lg:group-hover/header:shadow-lg sm:group-hover/header:shadow-lg relative group">
        <div className="absolute top-[5.75rem] group-hover/header:xl:w-full xl:h-[11.8rem] group-hover/header:xl:bg-white shadow-lg" />
        <Link to="/">
          <img
            src={Logo}
            alt="유어티쳐"
            className="xl:w-[11.771875rem] lg:w-[9.375rem] sm:w-[8.625rem] xl:h-[2.875rem] lg:h-[2.289375rem] sm:h-[2.10625rem] xl:mr-[1rem] xl:ml-[2.8rem] lg:ml-[1.875rem] sm:ml-[1.125rem]"
          />
        </Link>

        <ul className="xl:flex lg:hidden sm:hidden">
          {MENUS.map((menu) => (
            <li key={menu} className="relative group/menu">
              {MENU_PAGE[menu] && (
                <Link
                  to={`/${MENU_PAGE[menu]}`}
                  className="block w-[8.75rem] text-[1rem] text-center text-white mix-blend-difference group-hover/menu:font-bold"
                >
                  {menu}
                </Link>
              )}

              <ul className="absolute hidden group-hover/header:block w-full pt-[3.1rem] space-y-[1.5rem] text-[1rem] text-center z-10">
                <img
                  className="w-full h-[13.125rem] hidden group-hover/menu:block absolute left-0 top-[1.4rem] z-1"
                  src={Bg}
                  alt="menu-background"
                />
                {SUB_MENUS[MENU_PAGE[menu]] &&
                  SUB_MENUS[MENU_PAGE[menu]].map((subMenuItem) => (
                    <li
                      key={subMenuItem}
                      className="relative flex items-center justify-center "
                    >
                      <Link
                        to={`/${MENU_PAGE[menu]}/${SUB_PAGE[subMenuItem]}`}
                        className="flex gap-[0.3rem] font-meduim group-hover/menu:text-white hover:font-bold"
                      >
                        <span>{subMenuItem}</span>
                        {subMenuItem === '교사방' && (
                          <div className="relative mt-[0.15rem]">
                            <img
                              src={Lock}
                              alt="자물쇠"
                              className="w-[1.01rem] h-[1.24rem] group-hover/menu:block group-hover/menu:hidden"
                            />

                            <img
                              src={White}
                              alt="자물쇠"
                              className="w-[1.01rem] h-[1.24rem] hidden group-hover/menu:block"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="flex items-center ml-auto">
          <div className="group/item flex">
            <li className="xl:flex lg:hidden sm:hidden">
              <Link to="/user">
                <img
                  src={Arrow}
                  alt="사용자"
                  className="w-[2.3rem] h-[2.3rem] right-[0.5rem] transform transition-transform duration-300 group-hover/item:rotate-90"
                />
              </Link>
            </li>
            <li className="xl:flex lg:hidden sm:hidden">
              <Link to="/auth/login" className="mr-[0.7rem]">
                <div className="absolute top-[1.5rem] w-[8.8125rem] h-[2.9375rem] border rounded-full bg-white opacity-50 shadow-xl group/item" />
                <span className="flex items-center justify-center black text-[0.875rem] pl-[0.88rem] pt-[0.55rem] text-white mix-blend-difference">
                  로그인 / 회원가입
                </span>
              </Link>
            </li>
          </div>

          <li className="xl:flex lg:hidden sm:hidden">
            <Link to="/">
              <img
                src={Jong}
                alt="알림"
                className="w-[1.7rem] h-[1.7rem] ml-[0.8rem] mr-[0.8rem] invert mix-blend-difference"
              />
            </Link>
          </li>

          <li>
            <Link to="/search">
              <img
                src={Search}
                alt="검색 아이콘"
                className="xl:w-[2.3rem] lg:w-[2.9375rem] sm:w-[1.875rem] xl:h-[2.3rem] lg:h-[2.9375rem] sm:h-[1.875rem] xl:mt-[0.15rem] xl:mr-[2.8rem] lg:mr-[0.45rem] sm:mr-[0.4rem]"
              />
            </Link>
          </li>
        </ul>
        <div className="xl:hidden">
          <button
            type="button"
            className="ham-button lg:w-[2.9375rem] sm:w-[1.875rem] lg:h-[3.3125rem] sm:[2.114375rem] lg:mt-[0.76rem] lg:mr-[1.5rem] lg:mt-[0.9rem] sm:mt-[0.7rem] sm:mr-[1.3rem]"
            onClick={toggleMenu}
          >
            <img src={isMenuOpen ? Close : Ham} alt="햄버거 메뉴 아이콘" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="relative xl:hidden lg:fixed inset-0 bg-black bg-opacity-50 z-30 sm:fixed inset-0 bg-black bg-opacity-50 z-30">
          <div
            ref={menuRef}
            className="xl:hidden fixed top-0 right-0 z-40 lg:w-[32rem] sm:w-[21.25rem] lg:h-[43.625rem] sm:w-[21.25rem] sm:h-[38.5rem] bg-white shadow-lg transition-transform duration-300 transform translate-x-0 lg:rounded-tl-[3rem] sm:rounded-tl-[1.5rem] lg:rounded-bl-[3rem] sm:rounded-bl-[1.5rem]"
          >
            <button
              type="button"
              className="lg:ml-[1.5rem] sm:ml-[1rem] lg:mt-[1.6rem] sm:mt-[2.25rem] lg:w-[2.9375rem] sm:w-[1.875rem] lg:h-[3.3125rem] sm:h-[2.114375rem]"
              onClick={toggleMenu}
            >
              <img src={Close} alt="메뉴닫기" />
            </button>

            <ul className="lg:space-y-[1rem] sm:space-y-[1.5rem]">
              {MENUS.map((menu) => (
                <li key={menu} className="relative group">
                  {MENU_PAGE[menu] && (
                    <button
                      type="button"
                      className="menu-button lg:text-[2.5rem] sm:text-[2rem] w-full text-left font-bold lg:pl-[7.7rem] sm:pl-[4rem] lg:py-[0.8rem] sm:py-[0.5rem]"
                      onClick={() =>
                        setOpenMenu(openMenu === menu ? null : menu)
                      }
                    >
                      {openMenu === menu && (
                        <img
                          src={Circle}
                          alt="메뉴확인 아이콘"
                          className="xl:hidden absolute lg:w-[1.4875rem] sm:w-[1.2375rem] lg:h-[1.0625rem] sm:h-[0.88375rem] lg:left-[5rem] sm:left-[2.2rem] lg:top-[30%] sm:top-[30%] w-[1rem] h-[1rem]"
                        />
                      )}
                      {menu}
                    </button>
                  )}
                  {openMenu === menu && (
                    <ul className="lg:ml-[7.8rem] sm:ml-[4.1rem] text-center lg:space-x-[3.3rem] sm:space-x-[1.6rem] flex flex-row">
                      {SUB_MENUS[MENU_PAGE[menu]] &&
                        SUB_MENUS[MENU_PAGE[menu]].map((subMenuItem) => (
                          <li key={subMenuItem} className="flex items-center">
                            <span className="inline-block w-[0.13rem] h-[0.13rem] bg-black rounded-full mr-1" />
                            <Link
                              to={`/${SUB_PAGE[subMenuItem]}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenMenu(null);
                              }}
                            >
                              {subMenuItem}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link to="/login">
                  <button
                    type="button"
                    className="absolute lg:w-[5.5rem] sm:w-[5.8125rem] lg:h-[2.9375rem] sm:h-[3.125rem] lg:top-[39rem] lg:right-2 sm:top-[33.9rem] sm:right-2 z-50"
                    onClick={toggleMenu}
                  >
                    <img src={User} alt="로그인 및 회원가입" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
