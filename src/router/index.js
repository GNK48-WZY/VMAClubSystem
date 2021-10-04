import { route } from 'quasar/wrappers';
import {
  createRouter, createMemoryHistory, createWebHistory, createWebHashHistory,
} from 'vue-router';
import { LoadingBar, Notify } from 'quasar';
import routes from './routes';
import { i18n } from '../boot/i18n';

const { global: { t } } = i18n;
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
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
    if (to.name === 'Login') {
      if (!store.getters['user/isLogin']) {
        startContinue();
      } else {
        Router.push(to.query.redirect ?? { name: 'ClubCenter' });
        Notify.create({
          type: 'info',
          message: t('router.authRedirect'),
        });
      }
    } else if (to.meta.needAuth) {
      if (store.getters['user/isLogin']) {
        startContinue();
      } else {
        Router.push({ name: 'Login', query: { redirect: to.fullPath } });
        Notify.create({
          type: 'negative',
          message: t('router.needAuth'),
        });
      }
    } else {
      startContinue();
    }
  });
  Router.afterEach((to) => {
    window.document.title = `${t(`pages.${to.name}`)}-${t('app.name')}`;
    LoadingBar.stop();
  });
  return Router;
});
