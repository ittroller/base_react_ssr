import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import privateRouter from './privateRouter';
import publicRouter from './publicRouter';

const NotFound = loadable(async () => {
  const { NotFound } = await import('../modules');
  return NotFound;
});

const SwitchRouter = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const routers = [];

    if (checkRouter(privateRouter)) {
      routers.push(checkRouter(privateRouter));
    }
    if (checkRouter(publicRouter)) {
      routers.push(checkRouter(publicRouter));
    }

    setRoutes(routers);
  }, []);

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
            {route.subRoutes.map((subRoute, i) => (
              <Route key={i} {...subRoute} />
            ))}
          </route.layout>
        </Route>
      ))}
      <Route exact component={NotFound} />
    </Switch>
  );
};

export default withRouter(SwitchRouter);
