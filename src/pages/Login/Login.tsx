import LoginComma from '@components/LoginComma';

const LoginTypes = ['kakao', 'google', 'naver'] as const;

const Login = () => {
  return (
    <div className="xl:h-[70vh] sm:h-[57.5vh] xl:mx-[25rem] mt-24 text-center">
      <h1
        className="
          2xl:mb-8 xl:mb-[1.125vw] lg:mb-[1.5rem] sm:mb-[0.5rem]
          2xl:text-7xl xl:text-[3.5vw] lg:text-5xl sm:text-3xl
          2xl:leading-none xl:leading-[3.5vw] lg:leading-[3.5vw]
          font-bold"
      >
        LOGIN
      </h1>
      <p
        className="
          2xl:text-3xl xl:text-[1.4875vw] lg:text-xl sm:text-sm
          2xl:mb-24 xl:mb-[4.75vw] lg:mb-[3.5rem] sm:mb-[2rem]"
      >
        유어티처로 로그인하여 더 많은 서비스를 만나보세요.
      </p>
      <div className="flex justify-center 2xl:gap-14 xl:gap-[4vw] lg:gap-10 sm:gap-3">
        {LoginTypes.map((type) => (
          <LoginComma
            key={type}
            type={type}
            hover
            className="2xl:w-[100%] xl:w-[18rem] lg:w-[12.5rem] sm:w-[7rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default Login;
