import ProfileExample from '@assets/img/profile-example.png';
import {
  UserAuthenticateStatusType,
  UserConnectType,
  UserDataType,
  UserInformationStatusType,
} from '@/types/user';

const MOCK_DATA_USER: UserDataType = {
  nickname: '유어티처',
  username: '김유어',
  profileSrc: ProfileExample,
  job: '유아어린이집 교사',
  isAuthenticated: 'NOT_AUTHENTICATED',
  isTeacher: 'IN_PROGRESS',
  isConnected: 'COMPLTED_CONNECTED',
  postCount: 124,
  commentCount: 141,
  heartPostCount: 654,
  likePostCount: 264,
};

const USER_MODAL_STATUS: {
  [key in UserInformationStatusType]: UserInformationStatusType;
} = {
  NICKNAME: 'NICKNAME',
  AUTHENTICATION: 'AUTHENTICATION',
  SNS_CONNECT: 'SNS_CONNECT',
  TEACHER_AUTHENTICATION: 'TEACHER_AUTHENTICATION',
};

const NICKNAME_DUPLICATE_STATUS = {
  DEFAULT: 'DEFAULT',
  DUPLICATE: 'DUPLICATE',
  NOT_DUPLICATE: 'NOT_DUPLICATE',
} as const;

const NICKNAME_DUPLICATE_STATUS_OPTIONS = {
  DEFAULT: {
    BORDER_COLOR: 'focus-within:border-green',
    COLOR: '',
    MESSAGE: '',
    BUTTON: '중복확인',
  },
  DUPLICATE: {
    BORDER_COLOR: 'border-rose-400',
    COLOR: 'text-rose-400',
    MESSAGE: '중복된 닉네임입니다. 새로운 닉네임을 입력해주세요.',
    BUTTON: '중복확인',
  },
  NOT_DUPLICATE: {
    BORDER_COLOR: 'border-green',
    COLOR: 'text-green',
    MESSAGE: '사용가능한 닉네임입니다.',
    BUTTON: '확인완료',
  },
};

const AUTHENTICATED_STATUS: UserAuthenticateStatusType = {
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

const CONNECTED_STATUS: UserConnectType = {
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

export {
  MOCK_DATA_USER,
  USER_MODAL_STATUS,
  NICKNAME_DUPLICATE_STATUS,
  NICKNAME_DUPLICATE_STATUS_OPTIONS,
  AUTHENTICATED_STATUS,
  CONNECTED_STATUS,
  SNS_CONNECT_LIST,
};
