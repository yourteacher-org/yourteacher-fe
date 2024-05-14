import ProfileExample from '@assets/img/profile-example.png';
import { IconType } from '@components/SVGIcon';

type AuthenticateStatusType =
  | 'not_authenticated'
  | 'in_progress'
  | 'completed_authentication';

type ConnectedStatusType = 'not_connected' | 'completed_connected';

type AuthenticateType<T extends AuthenticateStatusType | ConnectedStatusType> =
  {
    [key in T]: {
      iconColor: 'red' | 'gray' | 'green';
      iconType: IconType;
      status: string;
    };
  };

const AUTHENTICATED_STATUS: AuthenticateType<AuthenticateStatusType> = {
  not_authenticated: {
    iconColor: 'red',
    iconType: 'Exclamation',
    status: '인증필요',
  },
  in_progress: {
    iconColor: 'green',
    iconType: 'Clocking',
    status: '인증 중..',
  },
  completed_authentication: {
    iconColor: 'green',
    iconType: 'Check',
    status: '인증완료',
  },
};

const CONNECTED_STATUS: AuthenticateType<ConnectedStatusType> = {
  not_connected: {
    iconColor: 'red',
    iconType: 'Exclamation',
    status: '연동하기',
  },
  completed_connected: {
    iconColor: 'green',
    iconType: 'Check',
    status: '연동완료',
  },
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

const MOCK_DATA_USER: UserDataType = {
  nickname: '유어티처',
  username: '김유어',
  profileSrc: ProfileExample,
  job: '유아어린이집 교사',
  isAuthenticated: 'in_progress',
  isTeacher: 'not_authenticated',
  isConnected: 'not_connected',
  postCount: 124,
  commentCount: 141,
  heartPostCount: 654,
  likePostCount: 264,
};

export { MOCK_DATA_USER, AUTHENTICATED_STATUS, CONNECTED_STATUS };
