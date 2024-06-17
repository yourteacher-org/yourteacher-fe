import { UserInformationStatusType } from '@/types/user';
import UserNickNameModal from './UserNickNameModal';
import UserSNSConnectModal from './UserSNSConnectModal';
import UserTeacherModal from './UserTeacherModal';

const userModals: {
  [key in UserInformationStatusType]: () => JSX.Element;
} = {
  NICKNAME: UserNickNameModal,
  AUTHENTICATION: UserNickNameModal,
  TEACHER_AUTHENTICATION: UserTeacherModal,
  SNS_CONNECT: UserSNSConnectModal,
};

export default userModals;
