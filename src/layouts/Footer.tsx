import Comma from '@assets/img/comma.svg?react';
import TopArrow from '@assets/img/scroll-top-arrrow.svg?react';

const FOOTER_MENUS = ['개인정보처리방침', '이용약관', '버그제보', '광고문의'];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full">
      <div className=" relative h-[367px] mx-5 bg-green-1 rounded-t-[50px]">
        <Comma className="absolute -top-40 ml-16" />
        <button
          aria-label="scroll-top"
          className="group w-10 absolute -top-48 right-[55px]"
          onClick={scrollTop}
        >
          <TopArrow />
          <span
            className="absolute rotate-90 right-1 bottom-1
              group-hover:-translate-y-7 transition-transform duration-[.6s] ease-in-out"
          >
            TOP
          </span>
        </button>
        <div className="ml-[27rem] pt-[60px] text-white text-[18px]">
          <ul className="flex gap-20 mb-16 text-[24px]">
            {FOOTER_MENUS.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>

          <p className="mb-4 text-green-3">Ua Teacher 유어티처</p>
          <div className="flex gap-12 mb-10 text-green-3">
            <p>010.0000.0000</p>
            <p>Uateacher@google.com</p>
          </div>
          <p className="text-green-2">
            © 2024. Ua Teacher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
