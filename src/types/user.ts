import { IconType } from '@components/SVGIcon';
import { ReactNode } from 'react';

type UserInformationStatusType =
  | 'NICKNAME'
  | 'AUTHENTICATION'
  | 'TEACHER_AUTHENTICATION'
  | 'SNS_CONNECT';

type UserModalActionType = ({
  cancel,
  confirm,
  disabled,
}: {
  cancel: () => void;
  confirm: () => void;
  disabled: boolean;
}) => ReactNode;

type AuthenticateStatusType =
  | 'NOT_AUTHENTICATED'
  | 'IN_PROGRESS'
  | 'COMPLETED_AUTHENTICATION';

type ConnectedStatusType = 'NOT_CONNECTED' | 'COMPLTED_CONNECTED';

type AuthenticateType<T extends AuthenticateStatusType | ConnectedStatusType> =
  {
    [key in T]: {
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
  isConnected: ConnectedStatusType;
  postCount: number;
  commentCount: number;
  heartPostCount: number;
  likePostCount: number;
}

export type {
  UserDataType,
  AuthenticateType,
  UserModalActionType,
  ConnectedStatusType,
  AuthenticateStatusType,
  UserInformationStatusType,
};
