import loadable from '@loadable/component';

import { PrivateLayout } from '../layouts';

const AppContainer = loadable(() => import('../modules'));

const privateRouters = {
  layout: PrivateLayout,
  subRoutes: [
    {
      path: '/dashboard',
      component: AppContainer,
      exact: true,
      isAuth: true,
    },
  ],
};

export default privateRouters;
