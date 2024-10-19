import { PropsWithChildren, ReactNode } from 'react';

import SVGIcon from '@components/SVGIcon';

interface UserProfileWrapperProps {
  children?: ReactNode;
}

const UserProfileWrapper = ({ children }: UserProfileWrapperProps) => {
  return (
    <div
      className="flex items-center
        xl:gap-10 lg:gap-8 sm:gap-6
        xl:mb-[3.75rem] lg:mb-12 sm:mb-8"
    >
      {children}
    </div>
  );
};

interface UserProfileImageProps {
  children?: ReactNode;
}

const UserProfileImage = ({ children }: UserProfileImageProps) => {
  return (
    <div
      className="relative
      xl:w-[12rem] lg:w-[11rem] sm:w-[8.75rem]
      aspect-square
      lg:p-[0.625rem] sm:p-[0.5rem]
      border rounded-full"
    >
      <div className="w-[100%] aspect-square rounded-full bg-gray-100 overflow-hidden">
        {children}
      </div>
      <button
        type="button"
        aria-label="profile_image_edit_button"
        className="absolute
          p-2 pt-2.5
          -right-0 -bottom-0
          bg-green rounded-full"
      >
        <SVGIcon type="Pencil" className="lg:w-9 sm:w-6 stroke-white" />
      </button>
    </div>
  );
};

const UserProfileNickname = ({ children }: PropsWithChildren) => {
  return (
    <p
      className="xl:text-[3.125rem] lg:text-[2.75rem] sm:text-[2rem]
      font-bold"
    >
      {children}
    </p>
  );
};

interface UserProfileNameAndJobProps {
  children?: ReactNode;
}

const UserProfileName = ({ children }: UserProfileNameAndJobProps) => {
  return (
    <p
      className="
      lg:text-[1.25rem] sm:text-[1rem]
      text-black-2"
    >
      {children}
    </p>
  );
};

const UserProfile = Object.assign(UserProfileWrapper, {
  Image: UserProfileImage,
  Name: UserProfileName,
  Nickname: UserProfileNickname,
});

export default UserProfile;
