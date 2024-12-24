interface BookmarkIconProps {
  bookmarkState?: 'notBookmarked' | 'bookmarked';
  className?: string;
}

const BookmarkIcon = ({
  bookmarkState = 'notBookmarked',
  className,
}: BookmarkIconProps) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`group cursor-pointer ${className}`}
    >
      <circle
        cx="30"
        cy="30"
        r="29.5"
        className="fill-white"
        stroke="#DBDBDB"
      />
      <path
        d="M20 16.8601C20 15.8328 20.8359 15 21.8669 15H38.1331C39.1641 15 40 15.8328 40 16.8601V44.0681C40 44.8967 38.9945 45.3116 38.4065 44.7257L30.6601 37.0077C30.2955 36.6445 29.7045 36.6445 29.3399 37.0077L21.5935 44.7257C21.0055 45.3116 20 44.8967 20 44.0681V16.8601Z"
        className={`group-hover:fill-green ${bookmarkState === 'bookmarked' ? 'fill-green' : 'fill-white'}`}
        stroke="#DBDBDB"
      />
    </svg>
  );
};

export default BookmarkIcon;
