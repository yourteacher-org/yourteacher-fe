import { ChangeEvent, useState } from 'react';

import Modal from '@components/Modal/Modal';
import useModalContext from '@components/Modal/ModalContext';
import { UserModalActionType } from '@/types/user';

interface UserNickNameModalProps {
  children?: UserModalActionType;
}

const DUPLICATE_STATUS = {
  DEFAULT: 'DEFAULT',
  DUPLICATE: 'DUPLICATE',
  NOT_DUPLICATE: 'NOT_DUPLICATE',
} as const;

const DUPLICATE_STATUS_OPTIONS = {
  DEFAULT: {
    COLOR: '',
    MESSAGE: '',
  },
  DUPLICATE: {
    COLOR: 'text-rose-400',
    MESSAGE: '중복된 닉네임입니다.',
  },
  NOT_DUPLICATE: {
    COLOR: 'text-green',
    MESSAGE: '사용가능한 닉네임입니다.',
  },
};

const UserNickNameModal = ({ children }: UserNickNameModalProps) => {
  const { handleIsShow } = useModalContext();
  const [nickname, setNickname] = useState<string>('');
  const [duplicateStatus, setDuplicateStatus] = useState<
    keyof typeof DUPLICATE_STATUS
  >(DUPLICATE_STATUS.DEFAULT);

  const confirm = () => {
    console.log(nickname);
    handleIsShow(false);
  };

  const cancel = () => handleIsShow(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setDuplicateStatus(DUPLICATE_STATUS.DEFAULT);
  };

  const checkDuplicate = async () => {
    if (nickname === 'nickname') {
      setDuplicateStatus(DUPLICATE_STATUS.DUPLICATE);
    } else {
      setDuplicateStatus(DUPLICATE_STATUS.NOT_DUPLICATE);
    }
  };

  return (
    <Modal>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold mb-12">닉네임 변경</h1>
        <p className="text-2xl mb-5">변경하실 닉네임을 입력해주세요.</p>
        <div className="flex border rounded-full p-1 pl-5 mb-1 overflow-hidden">
          <input
            className="flex-1 min-w-[14.75rem] focus:outline-none"
            placeholder="기존 설정한 닉네임: 유어티처"
            onChange={handleChange}
            value={nickname}
          />
          <button
            className="rounded-full px-3 py-1 text-white m-0 bg-gray-1 disabled:bg-gray-5"
            disabled={!nickname.length}
            onClick={checkDuplicate}
          >
            중복확인
          </button>
        </div>
        <p
          className={`text-sm ${DUPLICATE_STATUS_OPTIONS[duplicateStatus].COLOR}`}
        >
          {DUPLICATE_STATUS_OPTIONS[duplicateStatus].MESSAGE}
        </p>
      </div>
      {children &&
        children({
          cancel,
          confirm,
          disabled: duplicateStatus !== DUPLICATE_STATUS.NOT_DUPLICATE,
        })}
    </Modal>
  );
};

export default UserNickNameModal;
