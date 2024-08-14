// import CommaSVG from '@assets/comma.svg';

const FOOTER_MENUS = ['개인정보처리방침', '이용약관', '버그제보', '광고문의'];

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0">
      <div className=" relative h-80 bg-gray-2">
        {/* <img className="absolute -top-40 ml-16" src={CommaSVG} alt="comma" /> */}
        <div className="ml-[27rem] pt-10 text-white">
          <ul className="flex gap-20 mb-20">
            {FOOTER_MENUS.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>

          <p className="mb-4">Ua Teacher 유어티처</p>
          <div className="flex gap-14 mb-10">
            <p>010.0000.0000</p>
            <p>ua-teacher@google.com</p>
          </div>
          <p className="text-gray-1">
            © 2024. Ua Teacher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
