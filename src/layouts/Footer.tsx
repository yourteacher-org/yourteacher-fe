import Comma from '@assets/img/comma.svg?react';
import TopArrow from '@assets/img/scroll-top-arrrow.svg?react';

const FOOTER_MENUS = ['개인정보처리방침', '이용약관', '버그제보', '광고문의'];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full">
      <div
        className="relative xl:h-[22.875rem] lg:h-[25rem] sm:h-[21.25rem]
          xl:mx-5 lg:mx-[1.875rem] sm:mx-2.5
          lg:px-0 sm:px-5
          bg-green-1 rounded-t-[50px]"
      >
        <Comma
          className="xl:h-auto lg:h-[12.125rem] sm:h-[8.5rem]
            absolute xl:-top-40 lg:-top-20 sm:-top-14
            xl:left-16 sm:left-[50%]
            xl:translate-x-0 sm:-translate-x-[50%]"
        />
        <button
          aria-label="scroll-top"
          className="group w-10 absolute -top-48 right-[55px] xl:block sm:hidden"
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
        <div
          className="xl:ml-[27rem] lg:mx-auto
            xl:pt-[3.75rem] lg:pt-[9.75rem] sm:pt-[7.25rem]
            xl:text-left sm:text-center
            text-white xl:text-[18px] lg:text-sm sm:text-[0.625rem]"
        >
          <ul
            className="flex xl:justify-normal sm:justify-center
              xl:mb-16 lg:mb-[3.125rem] sm:mb-10
              xl:gap-20 lg:gap-[3.75rem] sm:gap-10
              xl:text-[1.5rem] lg:text-[1rem] sm:text-[0.75rem]"
          >
            {FOOTER_MENUS.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>

          <p className="xl:mb-4 sm:mb-[0.625rem] text-green-3">
            Ua Teacher 유어티처
          </p>
          <div
            className="flex xl:flex-row sm:flex-col xl:gap-12 sm:gap-2
              xl:mb-14 sm:mb-[2.625rem]
              text-green-3"
          >
            <p>010.0000.0000</p>
            <p>Uateacher@google.com</p>
          </div>
          <p className="xl:text-[1rem] lg:text-[0.75rem] text-green-2">
            © 2024. Ua Teacher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
