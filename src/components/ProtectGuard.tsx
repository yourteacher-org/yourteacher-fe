import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

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
    children
  ) : (
    <Navigate to={redirect} replace={replace} />
  );
};

export default ProtectGuard;
