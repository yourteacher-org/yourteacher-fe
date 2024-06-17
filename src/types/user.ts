import { IconType } from '@components/SVGIcon';

type UserInformationStatusType =
  | 'NICKNAME'
  | 'AUTHENTICATION'
  | 'TEACHER_AUTHENTICATION'
  | 'SNS_CONNECT';

type AuthenticateStatusType =
  | 'NOT_AUTHENTICATED'
  | 'IN_PROGRESS'
  | 'COMPLETED_AUTHENTICATION';

type ConnectStatusType = 'NOT_CONNECTED' | 'COMPLTED_CONNECTED';

type UserAuthenticateStatusType = {
  [key in AuthenticateStatusType]: {
    ICON_COLOR: 'red' | 'gray' | 'green';
    ICON_TYPE: IconType;
    STATUS: string;
  };
};

type UserConnectType = {
  [key in ConnectStatusType]: {
    ICON_COLOR: 'red' | 'gray' | 'green';
    ICON_TYPE: IconType;
    STATUS: string;
  };
};

interface UserDataType {
  nickname: string;
  username: string;
  profileSrc: string;
  job: string;
  isAuthenticated: AuthenticateStatusType;
  isTeacher: AuthenticateStatusType;
  isConnected: ConnectStatusType;
  postCount: number;
  commentCount: number;
  heartPostCount: number;
  likePostCount: number;
}

export type {
  UserInformationStatusType,
  UserAuthenticateStatusType,
  UserConnectType,
  UserDataType,
};
