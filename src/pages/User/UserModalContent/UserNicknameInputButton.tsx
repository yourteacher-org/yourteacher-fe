import { ChangeEvent, Ref, forwardRef, useState } from 'react';

interface UserNicknameInputButtonProps {
  children?: (nickname: string) => void;
  resetDuplicateStatus: () => void;
}

const UserNicknameInputButton = forwardRef(
  (
    { children, resetDuplicateStatus }: UserNicknameInputButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [nickname, setNickname] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
      resetDuplicateStatus();
    };

    return (
      <>
        <input
          ref={ref}
          value={nickname}
          onChange={handleChange}
          placeholder="기존 설정한 닉네임: 유어티처"
          className="flex-1 min-w-[14.75rem] focus:outline-none"
        />
        {children && children(nickname)}
      </>
    );
  },
);

export default UserNicknameInputButton;
