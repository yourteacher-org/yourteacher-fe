import ProfileExample from '@assets/img/profile-example.png';
import {
  AuthenticateStatusType,
  AuthenticateType,
  ConnectedStatusType,
  UserDataType,
  UserInformationStatusType,
} from '@/types/user';

const USER_MODAL_STATUS: {
  [key in UserInformationStatusType]: UserInformationStatusType;
} = {
  NICKNAME: 'NICKNAME',
  AUTHENTICATION: 'AUTHENTICATION',
  SNS_CONNECT: 'SNS_CONNECT',
  TEACHER_AUTHENTICATION: 'TEACHER_AUTHENTICATION',
};

const AUTHENTICATED_STATUS: AuthenticateType<AuthenticateStatusType> = {
  NOT_AUTHENTICATED: {
    ICON_COLOR: 'red',
    ICON_TYPE: 'Exclamation',
    STATUS: '인증필요',
  },
  IN_PROGRESS: {
    ICON_COLOR: 'green',
    ICON_TYPE: 'Clocking',
    STATUS: '인증 중..',
  },
  COMPLETED_AUTHENTICATION: {
    ICON_COLOR: 'green',
    ICON_TYPE: 'Check',
    STATUS: '인증완료',
  },
};

const CONNECTED_STATUS: AuthenticateType<ConnectedStatusType> = {
  NOT_CONNECTED: {
    ICON_COLOR: 'red',
    ICON_TYPE: 'Exclamation',
    STATUS: '연동하기',
  },
  COMPLTED_CONNECTED: {
    ICON_COLOR: 'green',
    ICON_TYPE: 'Check',
    STATUS: '연동완료',
  },
};

const SNS_CONNECT_LIST = [
  { type: 'kakao', isConnected: false },
  { type: 'google', isConnected: true },
  { type: 'naver', isConnected: true },
] as const;

const MOCK_DATA_USER: UserDataType = {
  nickname: '유어티처',
  username: '김유어',
  profileSrc: ProfileExample,
  job: '유아어린이집 교사',
  isAuthenticated: 'IN_PROGRESS',
  isTeacher: 'NOT_AUTHENTICATED',
  isConnected: 'NOT_CONNECTED',
  postCount: 124,
  commentCount: 141,
  heartPostCount: 654,
  likePostCount: 264,
};

export {
  USER_MODAL_STATUS,
  AUTHENTICATED_STATUS,
  CONNECTED_STATUS,
  SNS_CONNECT_LIST,
  MOCK_DATA_USER,
};
