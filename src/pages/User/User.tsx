import React from 'react';

import Section from '@layouts/Section';
import PageNav from '@components/PageNav';

import CirclePencil from '@assets/img/circle-pencil.png';
import ProfileExample from '@assets/img/profile-example.png';
import Pencil from '@assets/icon/pencil.svg?react';
import Check from '@assets/icon/check.svg?react';
import Exclamation from '@assets/icon/exclamation.svg?react';

import UserInformation from './UserInformation';
import UserInformationIcon from './UserInformationIcon';
import UserAction from './UserAction';

const UserPage: React.FC = () => {
  return (
    <Section as="section" className="px-[16.25rem] mt-[9.5rem]">
      <PageNav>
        <span>마이페이지</span>
      </PageNav>
      <h1 className="text-[4.375rem] font-bold mb-[7.5rem]">마이페이지</h1>

      <div className="flex items-center gap-10 mb-[3.75rem]">
        <div className="relative w-[12rem] aspect-square p-[0.625rem] border rounded-full">
          <div className="w-[100%] aspect-square rounded-full bg-gray-100 overflow-hidden">
            <img src={ProfileExample} alt="profile" />
          </div>
          <div className="absolute -right-1 -bottom-1">
            <img src={CirclePencil} alt="pencil-icon" />
          </div>
        </div>
        <div>
          <p className="text-[3.125rem] font-bold">유어티처</p>
          <div className="flex gap-4 text-[1.25rem]text-black-2">
            <span>김유어</span>
            <span className="text-gray-5">|</span>
            <span>유아어린이집 교사</span>
          </div>
        </div>
      </div>

      <div className="mb-[3.75rem]">
        <h2 className="mb-5 text-4xl font-bold">개인정보</h2>
        <div
          className="flex items-center w-[100%] h-[12.5vw] rounded-[2.5rem]
            shadow-[6px_6px_20px_1px_rgba(0,0,0,0.15)]"
        >
          <UserInformation
            name="닉네임"
            icon={<UserInformationIcon icon={<Pencil />} />}
          >
            유어티처
          </UserInformation>
          <UserInformation
            name="본인인증"
            icon={<UserInformationIcon color="green" icon={<Check />} />}
            borderLeft
          >
            인증완료
          </UserInformation>
          <UserInformation
            name="교사인증"
            icon={<UserInformationIcon color="red" icon={<Exclamation />} />}
            borderLeft
          >
            인증필요
          </UserInformation>
          <UserInformation
            name="SNS 연동"
            icon={<UserInformationIcon color="green" icon={<Check />} />}
            borderLeft
          >
            연동완료
          </UserInformation>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-5 text-4xl font-bold">나의 활동</h2>
        <div className="border-y-2 border-black">
          <UserAction title="내가 쓴 글" count="254" borderBottom />
          <UserAction title="내가 쓴 댓글" count="254" borderBottom />
          <UserAction title="내가 찜한 글" count="254" borderBottom />
          <UserAction title="내가 좋아요 한 글" count="254" />
        </div>
      </div>

      <div className="w-[100%] flex justify-center gap-[0.625rem] pb-[15rem] text-[1rem]">
        <p>회원탈퇴를 원하신다면 탈퇴하기를 클릭해주세요.</p>
        <p className="text-red cursor-pointer">
          <u>탈퇴하기</u> {'>'}
        </p>
      </div>
    </Section>
  );
};

export default UserPage;
