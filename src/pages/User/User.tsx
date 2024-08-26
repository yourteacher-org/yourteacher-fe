import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AUTHENTICATED_STATUS,
  // CONNECTED_STATUS,
  MOCK_DATA_USER,
  USER_MODAL_STATUS,
} from '@data/User';
import Section from '@layouts/Section';
import PageNav from '@components/PageNav';
import { useModalContext } from '@components/Modal';
import { UserDataType, UserInformationStatusType } from '@/types/user';

import UserAction from './UserAction';
import UserProfile from './UserProfile';
import UserInformation from './UserInformation';
import userModals from './UserModalContent';

const UserPage: React.FC = () => {
  const navigate = useNavigate();
  const { isShow, handleIsShow } = useModalContext();
  const [userData, setUserData] = useState<UserDataType>();
  const [modalState, setModalState] = useState<UserInformationStatusType>(
    USER_MODAL_STATUS.NICKNAME,
  );

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

  useEffect(() => {
    (async function fetchUserData() {
      setUserData(MOCK_DATA_USER);
    })();
  }, []);

  if (!userData) {
    return (
      <div className="w-full h-[50vh] mx-auto">
        <h1 className="mt-48 text-5xl font-bold text-center">로딩 중...</h1>
      </div>
    );
  }

  const userStatus = [
    {
      informationTitle: '본인인증',
      modalStatus: USER_MODAL_STATUS.AUTHENTICATION,
      informationStatus: AUTHENTICATED_STATUS[userData.isAuthenticated],
    },
    {
      informationTitle: '교사인증',
      modalStatus: USER_MODAL_STATUS.TEACHER_AUTHENTICATION,
      informationStatus: AUTHENTICATED_STATUS[userData.isTeacher],
    },
    // {
    //   informationTitle: 'SNS 연동',
    //   modalStatus: USER_MODAL_STATUS.SNS_CONNECT,
    //   informationStatus: CONNECTED_STATUS[userData.isConnected],
    // },
  ];

  const UserModal = userModals[modalState];

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
        className="xl:mb-[5rem] lg:mb-[3.5rem] sm:mb-[2rem]
          xl:text-[4.375rem] lg:text-[3.75rem] sm:text-[3rem]
          font-bold"
      >
        마이페이지
      </h1>

      <UserProfile>
        <UserProfile.Image>
          <img src={userData.profileSrc} alt="profile" />
        </UserProfile.Image>
        <div className="flex flex-col mt-4">
          <UserProfile.Name>{userData.username}</UserProfile.Name>
          <UserProfile.Nickname>{userData.nickname}</UserProfile.Nickname>
        </div>
      </UserProfile>

      <section className="lg:mb-[3.75rem] sm:mb-12">
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

          {userStatus.map(
            ({ informationTitle, modalStatus, informationStatus }) => (
              <UserInformation key={informationTitle}>
                <UserInformation.SubTitle
                  modalStatus={modalStatus}
                  onClick={changeModalStatus}
                >
                  <UserInformation.Label>
                    {informationTitle}
                  </UserInformation.Label>
                  <UserInformation.Icon
                    type={informationStatus.ICON_TYPE}
                    color={informationStatus.ICON_COLOR}
                  />
                </UserInformation.SubTitle>
                <UserInformation.Status>
                  {informationStatus.STATUS}
                </UserInformation.Status>
              </UserInformation>
            ),
          )}
        </div>
      </section>

      <section className="mb-20">
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
      </section>

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

      {isShow && <UserModal />}
    </Section>
  );
};

export default UserPage;
