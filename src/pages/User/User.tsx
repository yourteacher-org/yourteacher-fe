import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AUTHENTICATED_STATUS,
  CONNECTED_STATUS,
  MOCK_DATA_USER,
  USER_MODAL_STATUS,
} from '@data/User';
import Section from '@layouts/Section';
import PageNav from '@components/PageNav';
import { useModalContext } from '@components/Modal';
import { UserInformationStatusType, UserModalActionType } from '@/types/user';

import UserAction from './UserAction';
import UserProfile from './UserProfile';
import UserInformation from './UserInformation';
import UserNickNameModal from './UserModalContent/UserNickNameModal';
import UserTeacherModal from './UserModalContent/UserTeacherModal';
import UserSNSConnectModal from './UserModalContent/UserSNSConnectModal';

const USER_MODAL: {
  [key in UserInformationStatusType]: (props: {
    children: UserModalActionType;
  }) => JSX.Element;
} = {
  NICKNAME: UserNickNameModal,
  AUTHENTICATION: UserNickNameModal,
  TEACHER_AUTHENTICATION: UserTeacherModal,
  SNS_CONNECT: UserSNSConnectModal,
};

const UserPage: React.FC = () => {
  const navigate = useNavigate();
  const { isShow, handleIsShow } = useModalContext();
  const [userData] = useState(MOCK_DATA_USER);
  const [modalState, setModalState] = useState<UserInformationStatusType>(
    USER_MODAL_STATUS.NICKNAME,
  );

  const UserModal = USER_MODAL[modalState];

  const changeModalStatus = (status: UserInformationStatusType) => {
    handleIsShow(true);
    setModalState(status);
  };

  const handleWithdraw = () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    const isAgreeToWithdraw = confirm('정말로 유어티처를 탈퇴하시겠습니까?');
    if (isAgreeToWithdraw) {
      navigate('/withdraw');
    }
  };

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

      <UserProfile>
        <UserProfile.Image>
          <img src={userData.profileSrc} alt="profile" />
        </UserProfile.Image>
        <div>
          <UserProfile.Nickname>{userData.nickname}</UserProfile.Nickname>
          <UserProfile.NameAndJob
            username={userData.username}
            job={userData.job}
          />
        </div>
      </UserProfile>

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
            xl:h-[12.5vw] lg:h-36 sm:h-20
            lg:px-0 sm:px-2
            lg:rounded-[2.5rem] sm:rounded-[1.25rem]
            shadow-[6px_6px_20px_1px_rgba(0,0,0,0.15)]"
        >
          <UserInformation>
            <UserInformation.SubTitle
              modalStatus={USER_MODAL_STATUS.NICKNAME}
              onClick={changeModalStatus}
            >
              <UserInformation.Label>닉네임</UserInformation.Label>
              <UserInformation.Icon
                type="Pencil"
                color="gray"
                className="group-hover:bg-green
                stroke-gray-1 group-hover:stroke-white
                  transition-all duration-100"
              />
            </UserInformation.SubTitle>
            <UserInformation.Status>{userData.nickname}</UserInformation.Status>
          </UserInformation>

          <UserInformation>
            <UserInformation.SubTitle
              modalStatus={USER_MODAL_STATUS.AUTHENTICATION}
              onClick={changeModalStatus}
            >
              <UserInformation.Label>본인인증</UserInformation.Label>
              <UserInformation.Icon
                type={AUTHENTICATED_STATUS[userData.isAuthenticated].ICON_TYPE}
                color={
                  AUTHENTICATED_STATUS[userData.isAuthenticated].ICON_COLOR
                }
              />
            </UserInformation.SubTitle>
            <UserInformation.Status>
              {AUTHENTICATED_STATUS[userData.isAuthenticated].STATUS}
            </UserInformation.Status>
          </UserInformation>

          <UserInformation>
            <UserInformation.SubTitle
              modalStatus={USER_MODAL_STATUS.TEACHER_AUTHENTICATION}
              onClick={changeModalStatus}
            >
              <UserInformation.Label>교사인증</UserInformation.Label>
              <UserInformation.Icon
                type={AUTHENTICATED_STATUS[userData.isTeacher].ICON_TYPE}
                color={AUTHENTICATED_STATUS[userData.isTeacher].ICON_COLOR}
              />
            </UserInformation.SubTitle>
            <UserInformation.Status>
              {AUTHENTICATED_STATUS[userData.isTeacher].STATUS}
            </UserInformation.Status>
          </UserInformation>

          <UserInformation>
            <UserInformation.SubTitle
              modalStatus={USER_MODAL_STATUS.SNS_CONNECT}
              onClick={changeModalStatus}
            >
              <UserInformation.Label>SNS 연동</UserInformation.Label>
              <UserInformation.Icon
                type={CONNECTED_STATUS[userData.isConnected].ICON_TYPE}
                color={CONNECTED_STATUS[userData.isConnected].ICON_COLOR}
              />
            </UserInformation.SubTitle>
            <UserInformation.Status>
              {CONNECTED_STATUS[userData.isConnected].STATUS}
            </UserInformation.Status>
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
          <UserAction title="내가 쓴 글" count={userData.postCount} />
          <UserAction title="내가 쓴 댓글" count={userData.commentCount} />
          <UserAction title="내가 찜한 글" count={userData.heartPostCount} />
          <UserAction
            title="내가 좋아요 한 글"
            count={userData.likePostCount}
          />
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
        <button
          type="button"
          className="text-red cursor-pointer"
          onClick={handleWithdraw}
        >
          <u>탈퇴하기</u> {'>'}
        </button>
      </div>

      {isShow && (
        <UserModal>
          {({ cancel, confirm, disabled }) => (
            <div className="flex h-[7.5rem] border-t-[1px] border-gray-300 text-xl">
              <button className="flex-1 text-gray-400" onClick={cancel}>
                취소하기
              </button>
              <button
                className="flex-1 text-white bg-green disabled:bg-gray-300"
                onClick={confirm}
                disabled={disabled}
              >
                저장하기
              </button>
            </div>
          )}
        </UserModal>
      )}
    </Section>
  );
};

export default UserPage;
