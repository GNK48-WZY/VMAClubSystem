const routes = [
  {
    name: 'Index',
    path: '/',
    component: () => import('src/pages/Index.vue'),
    meta: {
      needAuth: false,
      full: false,
    },
  },
  {
    name: 'ClubCenter',
    path: '/club',
    component: () => import('src/pages/ClubCenter.vue'),
    meta: {
      needAuth: true,
      full: false,
    },
  },
  {
    name: 'ClubDetail',
    path: '/club/:id',
    component: () => import('pages/ClubDetail.vue'),
    meta: {
      needAuth: true,
      full: false,
    },
  },
  {
    name: 'UserCenter',
    path: '/me',
    component: () => import('pages/UserCenter.vue'),
    meta: {
      needAuth: true,
      full: false,
    },
  },
  {
    name: 'Help',
    path: '/help',
    component: () => import('pages/Help.vue'),
    meta: {
      needAuth: false,
      full: false,
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('pages/Login.vue'),
    meta: {
      needAuth: false,
      full: true,
    },
  },
  {
    name: '404',
    path: '/:catchAll(.*)*',
    component: () => import('pages/404.vue'),
    meta: {
      needAuth: false,
      full: true,
    },
  },
];

export default routes;
