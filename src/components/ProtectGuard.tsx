import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectGaurdProps {
  isAuthenticated: boolean;
  children?: ReactNode;
  redirect?: string;
  replace?: boolean;
}

const ProtectGuard = ({
  isAuthenticated,
  children,
  redirect = '/',
  replace,
}: ProtectGaurdProps) => {
  return isAuthenticated ? (
    children || <Outlet />
  ) : (
    <Navigate to={redirect} replace={replace} />
  );
};

export default ProtectGuard;
