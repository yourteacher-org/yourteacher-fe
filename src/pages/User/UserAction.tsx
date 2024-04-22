interface UserActionProps {
  title: string;
  count: number | string;
  borderBottom?: boolean;
}

const UserAction = ({ title, count, borderBottom }: UserActionProps) => {
  return (
    <div
      className={`flex items-center justify-between
        2xl:py-[1.875rem] xl:py-[1.5vw]
        pl-10 pr-20
      ${borderBottom && 'border-b-2 border-gray-5'}`}
    >
      <span className="2xl:text-[1.625rem] xl:text-[1.375vw]">{title}</span>
      <span className="2xl:text-[1.25rem] xl:text-[1vw]">
        <em
          className="mr-2
            2xl:text-4xl xl:text-[1.875vw]
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
