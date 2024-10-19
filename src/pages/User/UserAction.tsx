interface UserActionProps {
  title: string;
  count: number | string;
}

const UserAction = ({ title, count }: UserActionProps) => {
  return (
    <div
      className="flex items-center justify-between
        2xl:py-[1.875rem] xl:py-[1.5vw] lg:py-4 sm:py-2
        xl:pl-10 lg:pl-8 sm:pl-4
        xl:pr-20 lg:pr-10 sm:pr-8
        border-b-2 border-gray-5
        last-of-type:border-none"
    >
      <span className="2xl:text-[1.625rem] xl:text-[1.375vw] lg:text-lg sm:text-[0.875rem]">
        {title}
      </span>
      <span className="2xl:text-[1.25rem] xl:text-[1vw]">
        <em
          className="mr-2
            2xl:text-4xl xl:text-[1.875vw] lg:text-xl sm:text-lg
            xl:leading-10
            font-bold not-italic"
        >
          {count}
        </em>
        개
      </span>
    </div>
  );
};

export default UserAction;
