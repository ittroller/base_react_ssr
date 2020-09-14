import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useLocation, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import privateRouter from './privateRouter';
import publicRouter from './publicRouter';

const NotFound = loadable(() => import('../modules'));

const SwitchRouter = () => {
  const [routes, setRoutes] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const routers = [];
    const storageToken = localStorage.getItem('token');

    if (storageToken) setIsAuth(true);

    if (checkRouter(privateRouter)) {
      routers.push(checkRouter(privateRouter));
    }
    if (checkRouter(publicRouter)) {
      routers.push(checkRouter(publicRouter));
    }

    setRoutes(routers);
  }, [setRoutes, setIsAuth]);

  const checkRouter = routers => {
    if (routers && Object.keys(routers).length && routers.subRoutes) {
      return routers;
    }
  };

  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact={route.subRoutes.some(r => r.exact)} path={route.subRoutes.map(r => r.path)}>
          <route.layout>
            {route.subRoutes.map((subRoute, i) => {
              if (subRoute.path === location.pathname && subRoute.isAuth && !isAuth) {
                return <Redirect key={i} to="/login" />;
              }
              return <Route key={i} {...subRoute} />;
            })}
          </route.layout>
        </Route>
      ))}
      <Route exact component={NotFound} />
    </Switch>
  );
};

export default withRouter(SwitchRouter);
