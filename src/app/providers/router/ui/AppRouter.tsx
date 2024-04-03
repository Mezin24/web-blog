import { RequireAuth } from 'app/providers/RequireAuth/RequireAuth';
import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRouteProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
  const routerWithWrapper = useCallback(
    (route: AppRouteProps) => (
      <Route
        key={route.path}
        path={route.path}
        element={(
          <div className='page-wrapper'>
            {route.authOnly ? (
              <RequireAuth>{route.element}</RequireAuth>
            ) : (
              route.element
            )}
          </div>
        )}
      />
    ),
    []
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(routerWithWrapper)}</Routes>
    </Suspense>
  );
});
