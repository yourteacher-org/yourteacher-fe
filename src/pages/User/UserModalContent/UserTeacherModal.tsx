import { ChangeEvent, useRef, useState } from 'react';

import SVGIcon from '@components/SVGIcon';
import { Modal, useModalContext } from '@components/Modal';
import { UserModalActionType } from '@/types/user';
import UserCircleQuestionIcon from './UserCircleQuestionIcon';

const makeFileName = (str: string, range: number) => {
  const forward = str.slice(0, range);
  const backward =
    str.length > range ? ` ... ${str.slice(str.length - 10)}` : '';

  return forward + backward;
};

const MAX_FILE_SIZE = 1_024 * 100 * 100;

interface UserTeacherModalProps {
  children?: UserModalActionType;
}

const UserTeacherModal = ({ children }: UserTeacherModalProps) => {
  const { handleIsShow } = useModalContext();
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files;

    if (target?.length && target[0].size <= MAX_FILE_SIZE) {
      setFile(target[0]);
    } else {
      alert('해당 파일은 10MB를 초과합니다.');
    }
  };

  const cancel = () => handleIsShow(false);

  const confirm = () => {
    console.log(file);
    handleIsShow(false);
  };

  const fileName = file
    ? makeFileName(file.name, 40)
    : '파일은 최대 10MB까지 업로드 가능합니다.';

  return (
    <Modal>
      <div className="flex flex-col flex-1 items-center justify-center mt-20 mb-12">
        <div className="flex gap-3 items-center mb-12">
          <h1 className="text-4xl font-bold">교사인증</h1>
          <UserCircleQuestionIcon />
        </div>
        <p className="text-[1.625rem] mb-5 text-center">
          교사인증은 교사자격증으로 인증하고 있습니다.
          <br />
          교사인증을 하시려면 본인의 교사 자격증을 업로드해주세요.
        </p>
        <button
          className={`flex items-center justify-center gap-3
            min-w-[34rem]
            mb-10 py-3 px-6
            text-lg text-gray-1
            border rounded-full cursor-pointer
            ${file && 'border-green border-2'}`}
          onClick={handleFileUpload}
        >
          <SVGIcon type="Clip" />
          <p className="line-clamp-1 text-ellipsis">{fileName}</p>
          <SVGIcon type="Upload" />
          <input ref={fileRef} type="file" onChange={handleFileChange} hidden />
        </button>
        <div className="flex flex-col gap-1 items-center text-gray-400">
          <SVGIcon type="CircleExclamation" />
          <p className="text-center leading-6">
            자격증은 교사인증 외의 용도에는 사용하지 않습니다.
            <br />
            인증 중 혹은 인증완료에 대한 문의는 1:1 문의를 이용해주세요.
            <br />
            자격증은 주민번호 뒷자리 1자리를 제외한 나머지는 가려서 올려주세요.
            <br />
            인증 소요기간은 영업일 기준 3일 ~ 7일정도 소요됩니다.
          </p>
        </div>
      </div>
      {children && children({ cancel, confirm, disabled: !file })}
    </Modal>
  );
};

export default UserTeacherModal;
