import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} replace />;
  }

  // eslint-disable-next-line
  return <>{children}</>;
};
