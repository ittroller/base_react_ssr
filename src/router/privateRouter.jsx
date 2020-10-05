import loadable from '@loadable/component';

import { PrivateLayout } from '../layouts';

const DashboardContainer = loadable(async () => {
  const { DashboardContainer } = await import('../modules');
  return DashboardContainer;
});

const privateRouters = {
  layout: PrivateLayout,
  subRoutes: [
    {
      path: '/dashboard',
      component: DashboardContainer,
      exact: true,
      isAuth: true,
    },
  ],
};

export default privateRouters;
