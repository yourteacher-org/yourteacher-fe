interface HeartIconProps {
  heartState?: 'like' | 'unlike';
  className?: string;
}

const Heart = ({ heartState = 'unlike', className }: HeartIconProps) => {
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
        d="M17.6077 32.4219L28.5753 43.5539C29.3587 44.3491 30.6413 44.3491 31.4247 43.5539L42.3923 32.4219C44.2222 30.5333 46 28.336 46 25.4C46 20.7608 42.4183 17 38 17C33.5817 17 30 20.7608 30 25.4C30 20.7608 26.4183 17 22 17C17.5817 17 14 20.7608 14 25.4C14 28.336 15.7778 30.5333 17.6077 32.4219Z"
        stroke="#DBDBDB"
        className={`group-hover:fill-pink ${heartState === 'like' ? 'fill-pink' : 'fill-white'}`}
      />
    </svg>
  );
};

export default Heart;
