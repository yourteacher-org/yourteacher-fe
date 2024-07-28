import React from 'react';

import Button from '@components/Button';
import Logo from '@assets/img/logo193.png';
import { useNavigate } from 'react-router-dom';

const dots = Array.from({ length: 3 }, (_, i) => i);

const Withdraw: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="xl:h-[90vh] lg:h-[60vh] flex justify-center pt-10">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="logo" className="lg:w-40 xl:mb-20 lg:mb-14" />
        <div className="hidden xl:flex gap-2 mb-24">
          {dots.map((dot) => (
            <span
              key={dot}
              className="inline-block w-2 h-2 rounded-full bg-gray-7"
            />
          ))}
        </div>
        <div className="flex flex-col items-center xl:mb-20 lg:mb-10">
          <h1 className="xl:text-7xl lg:text-4xl font-bold xl:mb-10 lg:mb-5">
            회원탈퇴 완료
          </h1>
          <p className="xl:text-3xl lg:text-2xl text-center leading-10">
            탈퇴 후, 7일 동안 재가입이 불가합니다. <br />
            유어티처를 이용해주시고 사랑해주셔서 감사합니다.
          </p>
        </div>
        <Button onClick={() => navigate('/', { replace: true })}>홈으로</Button>
      </div>
    </div>
  );
};

export default Withdraw;
