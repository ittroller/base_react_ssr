import loadable from '@loadable/component';

import { PublicLayout } from '../layouts';
import Public from '../modules/PublicPage/pages/Public';
const RegisterContainer = loadable(async () => {
  const {
    AuthContainer: { RegisterContainer },
  } = await import('../modules');
  return RegisterContainer;
});
const LoginContainer = loadable(async () => {
  const {
    AuthContainer: { LoginContainer },
  } = await import('../modules');
  return LoginContainer;
});

const publicRouters = {
  layout: PublicLayout,
  subRoutes: [
    {
      path: '/',
      component: Public,
      exact: true,
    },
    {
      exact: true,
      path: '/login',
      component: LoginContainer,
    },

    {
      exact: true,
      path: '/register',
      component: RegisterContainer,
    },
  ],
};

export default publicRouters;
