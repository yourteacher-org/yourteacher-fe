import { ChangeEvent, useRef, useState } from 'react';

import SVGIcon from '@components/SVGIcon';
import { Modal, useModalContext } from '@components/Modal';
import { makeDisplayFileName } from '@utils/formatter';

import Example from '@assets/img/certificate_example.png';
import UserCircleQuestionIcon from './UserCircleQuestionIcon';

const MAX_FILE_SIZE = 1_024 * 100 * 100;
const ALLOWED_FILE_TYPES_FOR_TEACHER_AUTHENTICATION = [
  'png',
  'jpg',
  'jpeg',
  'webp',
  'avif',
  'pdf',
];

const FILE_UPLOAD_ERRORS = {
  OVER_FILE_SIZE: '해당 파일은 10MB를 초과합니다.',
  DISALLOWD_FILE_TYPE:
    '해당 파일 유형은 업로드 할 수 없습니다.\n(png, jpg, jpeg, webp, avif, pdf 확장자 파일만 가능합니다.)',
};

const UserTeacherModal = () => {
  const { handleIsShow } = useModalContext();
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const triggerFileUpload = () => {
    fileRef.current!.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files || [];

    if (!target.length) return;

    if (target[0].size > MAX_FILE_SIZE) {
      alert(FILE_UPLOAD_ERRORS.OVER_FILE_SIZE);
      return;
    }

    if (
      !ALLOWED_FILE_TYPES_FOR_TEACHER_AUTHENTICATION.some((type) =>
        target[0].type.includes(type),
      )
    ) {
      alert(FILE_UPLOAD_ERRORS.DISALLOWD_FILE_TYPE);
      return;
    }

    setFile(target[0]);
  };

  const cancel = () => handleIsShow(false);

  const confirm = () => {
    console.log(file);
    handleIsShow(false);
  };

  const fileName = file
    ? makeDisplayFileName(file.name, 40)
    : '파일은 최대 10MB까지 업로드 가능합니다.';

  return (
    <Modal>
      <div className="flex flex-col flex-1 items-center justify-center mt-20 mb-12">
        <div className="relative flex gap-3 items-center mb-12">
          <h1 className="text-4xl font-bold">교사인증</h1>
          <UserCircleQuestionIcon>
            <div
              className="absolute -top-[20px] -right-[808px]
                hidden
                group-hover:flex flex-col gap-2
                transition-all duration-500"
            >
              <img
                className="w-[390px] aspect-[1/1.375]"
                src={Example}
                alt="certificate_example"
              />
              <p>※ 타 교육자격증 확인 사항 동일</p>
            </div>
            <div
              className="absolute top-[10px] left-[24px]
                w-[440px] hidden
                group-hover:flex items-center justify-end 
                bg-green h-0.5"
            >
              <div className="w-3 h-3 bg-green rounded-full" />
            </div>
          </UserCircleQuestionIcon>
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
            text-lg 
            border rounded-full cursor-pointer
            ${file ? 'border-green border-2' : 'text-gray-1'}`}
          onClick={triggerFileUpload}
        >
          <SVGIcon type="Clip" />
          <p
            className={`line-clamp-1 text-ellipsis ${file && 'text-gray-700'}`}
          >
            {fileName}
          </p>
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
            disabled={!file}
          >
            인증하기
          </button>
        }
      />
    </Modal>
  );
};

export default UserTeacherModal;
