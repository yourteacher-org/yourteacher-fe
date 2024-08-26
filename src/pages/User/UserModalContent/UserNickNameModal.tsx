import { useRef, useState } from 'react';

import {
  NICKNAME_DUPLICATE_STATUS,
  NICKNAME_DUPLICATE_STATUS_OPTIONS,
} from '@data/User';
import SVGIcon from '@components/SVGIcon';
import { Modal, useModalContext } from '@components/Modal';
import UserNicknameInputButton from './UserNicknameInputButton';

const UserNickNameModal = () => {
  const { handleIsShow } = useModalContext();
  const [duplicateStatus, setDuplicateStatus] = useState<
    keyof typeof NICKNAME_DUPLICATE_STATUS
  >(NICKNAME_DUPLICATE_STATUS.DEFAULT);
  const nickNameRef = useRef<HTMLInputElement>(null);

  const confirm = () => {
    console.log(nickNameRef.current?.value);
    handleIsShow(false);
  };

  const cancel = () => handleIsShow(false);

  const resetDuplicateStatus = () =>
    setDuplicateStatus(NICKNAME_DUPLICATE_STATUS.DEFAULT);

  const checkDuplicate = async (nickname: string) => {
    if (nickname === '유어티처') {
      setDuplicateStatus(NICKNAME_DUPLICATE_STATUS.DUPLICATE);
    } else {
      setDuplicateStatus(NICKNAME_DUPLICATE_STATUS.NOT_DUPLICATE);
    }
  };

  const confirmNotDuplicated =
    duplicateStatus === NICKNAME_DUPLICATE_STATUS.NOT_DUPLICATE;

  const isDuplicateNickName =
    duplicateStatus === NICKNAME_DUPLICATE_STATUS.DUPLICATE;

  return (
    <Modal>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold mb-12">닉네임 변경</h1>
        <p className="text-2xl mb-5">변경하실 닉네임을 입력해주세요.</p>
        <div
          className={`flex border rounded-full p-1 pl-5 mb-1 overflow-hiddenm
            ${NICKNAME_DUPLICATE_STATUS_OPTIONS[duplicateStatus].BORDER_COLOR}`}
        >
          <UserNicknameInputButton
            ref={nickNameRef}
            resetDuplicateStatus={resetDuplicateStatus}
          >
            {(nickname) => (
              <button
                className={`px-3 py-1 ml-2
                bg-gray-1 disabled:bg-gray-5 hover:bg-green
                text-white transition-colors rounded-full
                ${confirmNotDuplicated && 'bg-green'}`}
                disabled={!nickname.length || isDuplicateNickName}
                onClick={() => checkDuplicate(nickname)}
              >
                {NICKNAME_DUPLICATE_STATUS_OPTIONS[duplicateStatus].BUTTON}
              </button>
            )}
          </UserNicknameInputButton>
        </div>
        <div className="flex gap-1.5 items-center">
          {isDuplicateNickName && (
            <i className="flex items-center justify-center w-4 h-4 rounded-full bg-red">
              <SVGIcon type="Exclamation" width="10" height="10" />
            </i>
          )}
          <p
            className={`h-8 text-sm ${NICKNAME_DUPLICATE_STATUS_OPTIONS[duplicateStatus].COLOR}`}
          >
            {NICKNAME_DUPLICATE_STATUS_OPTIONS[duplicateStatus].MESSAGE}
          </p>
        </div>
      </div>

      <Modal.Bottom
        left={
          <button className="flex-1 text-gray-400" onClick={cancel}>
            취소하기
          </button>
        }
        right={
          <button
            className="flex-1 text-white bg-green disabled:bg-gray-300"
            onClick={confirm}
            disabled={
              duplicateStatus !== NICKNAME_DUPLICATE_STATUS.NOT_DUPLICATE
            }
          >
            저장하기
          </button>
        }
      />
    </Modal>
  );
};

export default UserNickNameModal;
