import React from 'react';

import Section from '@layouts/Section';
import PageNav from '@components/PageNav';

import CirclePencil from '@assets/img/circle-pencil.png';
import ProfileExample from '@assets/img/profile-example.png';

import UserInformation from './UserInformation';
import UserInformationIcon from './UserInformationIcon';
import UserAction from './UserAction';

const UserPage: React.FC = () => {
  return (
    <Section
      as="section"
      className="xl:px-[16.25rem] lg:px-[10.25rem]
        xl:mt-[9.5rem] lg:mt-[7.5rem] sm:mt-[5rem]"
    >
      <PageNav>
        <span>마이페이지</span>
      </PageNav>
      <h1
        className="xl:mb-[7.5rem] lg:mb-[3.5rem] sm:mb-[2rem]
          xl:text-[4.375rem] lg:text-[3.75rem] sm:text-[3rem]
          font-bold"
      >
        마이페이지
      </h1>

      <div
        className="flex items-center
        xl:gap-10 lg:gap-8 sm:gap-6
        xl:mb-[3.75rem] lg:mb-12 sm:mb-8"
      >
        <div
          className="relative
            xl:w-[12rem] lg:w-[11rem] sm:w-[8.75rem]
            aspect-square
            lg:p-[0.625rem] sm:p-[0.5rem]
            border rounded-full"
        >
          <div className="w-[100%] aspect-square rounded-full bg-gray-100 overflow-hidden">
            <img src={ProfileExample} alt="profile" />
          </div>
          <div
            className="absolute
              lg:-right-2 sm:-right-2
              lg:-bottom-2 sm:-bottom-2"
          >
            <img
              className="lg:w-20 sm:w-16"
              src={CirclePencil}
              alt="pencil-icon"
            />
          </div>
        </div>
        <div>
          <p
            className="xl:text-[3.125rem] lg:text-[2.75rem] sm:text-[2rem]
              font-bold"
          >
            유어티처
          </p>
          <div
            className="flex gap-4
              lg:text-[1.25rem] sm:text-[1rem]
              text-black-2"
          >
            <span>김유어</span>
            <span className="text-gray-5">|</span>
            <span>유아어린이집 교사</span>
          </div>
        </div>
      </div>

      <div className="lg:mb-[3.75rem] sm:mb-12">
        <h2
          className="lg:mb-5 sm:mb-2
            xl:text-4xl lg:text-3xl sm:text-2xl
            font-bold"
        >
          개인정보
        </h2>
        <div
          className="flex items-center
            w-[100%]
            xl:h-[12.5vw] lg:h-36 sm:h-20
            lg:px-0 sm:px-2
            lg:rounded-[2.5rem] sm:rounded-[1.25rem]
            shadow-[6px_6px_20px_1px_rgba(0,0,0,0.15)]"
        >
          <UserInformation
            name="닉네임"
            icon={<UserInformationIcon color="gray" icon="pencil" />}
          >
            유어티처
          </UserInformation>
          <UserInformation
            name="본인인증"
            icon={<UserInformationIcon color="green" icon="check" />}
            borderLeft
          >
            인증완료
          </UserInformation>
          <UserInformation
            name="교사인증"
            borderLeft
            icon={<UserInformationIcon color="red" icon="exclamation" />}
          >
            인증필요
          </UserInformation>
          <UserInformation
            name="SNS 연동"
            icon={<UserInformationIcon color="green" icon="check" />}
            borderLeft
          >
            연동완료
          </UserInformation>
        </div>
      </div>

      <div className="mb-20">
        <h2
          className="lg:mb-5 sm:mb-2
            xl:text-4xl lg:text-3xl sm:text-2xl
            font-bold"
        >
          나의 활동
        </h2>
        <div className="border-y-2 border-black">
          <UserAction title="내가 쓴 글" count="254" borderBottom />
          <UserAction title="내가 쓴 댓글" count="254" borderBottom />
          <UserAction title="내가 찜한 글" count="254" borderBottom />
          <UserAction title="내가 좋아요 한 글" count="254" />
        </div>
      </div>

      <div
        className="flex
          lg:flex-row sm:flex-col
          lg:items-start sm:items-center
          justify-center
          gap-[0.625rem] pb-[15rem] text-[1rem]"
      >
        <p>회원탈퇴를 원하신다면 탈퇴하기를 클릭해주세요.</p>
        <p className="text-red cursor-pointer">
          <u>탈퇴하기</u> {'>'}
        </p>
      </div>
    </Section>
  );
};

export default UserPage;
