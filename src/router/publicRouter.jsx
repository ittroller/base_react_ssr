import loadable from '@loadable/component';

import { PublicLayout } from '../layouts';

const HomeContainer = loadable(async () => {
  const { HomeContainer } = await import('../modules');
  return HomeContainer;
});
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
      component: HomeContainer,
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
