import { Navigate, NavigateProps, Outlet } from 'react-router-dom';

interface NavigateWithOutletProps extends NavigateProps {}

const NavigateWithOutlet = ({ ...props }: NavigateWithOutletProps) => {
  return (
    <>
      <Navigate {...props} />
      <Outlet />
    </>
  );
};

export default NavigateWithOutlet;
