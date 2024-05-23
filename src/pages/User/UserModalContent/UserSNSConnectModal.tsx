import SVGIcon from '@components/SVGIcon';
import LoginComma from '@components/LoginComma';
import { Modal, useModalContext } from '@components/Modal';
import { UserModalActionType } from '@/types/user';

const LoginCommaList = [
  { type: 'kakao', isConnected: false },
  { type: 'google', isConnected: true },
  { type: 'naver', isConnected: true },
] as const;

interface UserSNSConnectModalProps {
  children?: UserModalActionType;
}

const UserSNSConnectModal = ({ children }: UserSNSConnectModalProps) => {
  const { handleIsShow } = useModalContext();

  const cancel = () => handleIsShow(false);
  const confirm = () => handleIsShow(false);

  return (
    <Modal>
      <div className="text-center px-40 pt-20 pb-14">
        <h1 className="text-4xl font-bold mb-14">SNS 연동</h1>
        <p className="text-[1.625rem] mb-10">
          SNS 연동을 위해 아래의 연동하고자 하는 SNS를 선택하고
          <br />
          인증하기를 눌러주세요.
        </p>
        <div className="flex justify-center 2xl:gap-16 xl:gap-[4vw] lg:gap-10 sm:gap-3">
          {LoginCommaList.map(({ type, isConnected }) => (
            <LoginComma
              key={type}
              type={type}
              hover={!isConnected}
              className="2xl:w-[100%] xl:w-[18rem] lg:w-[12.5rem] sm:w-[7rem]"
            >
              {isConnected && (
                <div
                  className="absolute left-5 bottom-5 w-10 aspect-square 
                  flex items-center justify-center bg-green rounded-full"
                >
                  <SVGIcon type="Check" className="w-5 h-5" />
                </div>
              )}
            </LoginComma>
          ))}
        </div>
      </div>
      {children && children({ cancel, confirm, disabled: false })}
    </Modal>
  );
};

export default UserSNSConnectModal;
