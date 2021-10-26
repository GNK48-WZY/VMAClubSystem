import { route } from 'quasar/wrappers';
import {
  createRouter, createMemoryHistory, createWebHistory, createWebHashHistory,
} from 'vue-router';
import { LoadingBar, Notify } from 'quasar';
import routes from './routes';
import { i18n } from '../boot/i18n';

const { global: { t } } = i18n;
const createHistory = process.env.SERVER
  ? createMemoryHistory
  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
});

export { Router };

export default route(({ store }) => {
  Router.beforeEach((to, _from, next) => {
    function startContinue() {
      LoadingBar.start();
      next();
    }
    if (to.name === 'Sign') {
      if (!store.getters['user/isSignIn']) {
        startContinue();
      } else {
        Router.push(to.query.redirect ?? { name: 'ClubCenter' });
        Notify.create({
          type: 'info',
          message: t('router.authRedirect'),
        });
      }
    } else if (to.meta.needAuth || false) {
      if (store.getters['user/isSignIn']) {
        startContinue();
      } else {
        Router.push({ name: 'Sign', query: { redirect: to.fullPath } });
        Notify.create({
          type: 'negative',
          message: t('router.needAuth'),
        });
      }
    } else {
      startContinue();
    }
  });
  Router.afterEach(() => {
    LoadingBar.stop();
  });
  return Router;
});
