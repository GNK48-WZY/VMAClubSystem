import * as Sentry from '@sentry/browser';
import { api } from 'boot/axios';
import { Router } from 'src/router';
import { Notify } from 'quasar';
import { i18n } from 'src/boot/i18n';

const { global: { t } } = i18n;

async function signInSuccess(user) {
  Sentry.setUser(user);
  Notify.create({
    type: 'positive',
    message: t('sign.message.success'),
  });
}
async function signInFail(error) {
  Notify.create({
    type: 'negative',
    message: error,
  });
}

export default {
  namespaced: true,
  state: {
    user: {
      avatar: '',
      name: '',
      id: 0,
      email: '',
      token: '',
    },
  },
  mutations: {
    setUser(state, user) {
      if (user.token) {
        state.user = user;
      } else {
        state.user = {
          avatar: '',
          name: '',
          id: 0,
          email: '',
          token: '',
        };
      }
    },
  },
  actions: {
    async mockSignIn({ commit }) {
      return new Promise((resolve) => {
        const user = {
          name: '测试用户',
          id: 123456,
          email: 'test@stu.vma.edu.cn',
          token: 'test-token',
        };
        commit('setUser', user);
        signInSuccess(user);
        resolve();
      });
    },
    async signIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        if (!!email && !!password) {
          api({
            url: '/login',
            method: 'post',
            data: {
              email: `${email}@stu.vma.edu.cn`,
              password,
            },
          })
            .then((response) => response.data)
            .then((data) => {
              commit('setUser', data);
              signInSuccess(data);
              resolve(data);
            })
            .catch((error) => {
              signInFail(error);
              reject(error);
            });
        } else {
          signInFail('incompleteForm');
          reject('incompleteForm');
        }
      });
    },
    async register({ commit }, {
      id, name, email, password,
    }) {
      return new Promise((resolve, reject) => {
        if (!!id && !!name && !!email && !!password) {
          api({
            url: '/register',
            method: 'post',
            data: {
              id,
              name,
              email: `${email}@stu.vma.edu.cn`,
              password,
            },
          })
            .then((response) => response.data)
            .then((data) => {
              commit('setUser', data);
              signInSuccess(data);
              resolve(data);
            })
            .catch((error) => {
              signInFail(error);
              reject(error);
            });
        } else {
          signInFail('incompleteForm');
          reject('incompleteForm');
        }
      });
    },
    async signOut({ commit }) {
      commit('setUser', { user: { token: false } });
      Sentry.configureScope((scope) => scope.setUser(null));
      if (Router.currentRoute.value.meta.needAuth) {
        Router.push({ name: 'Sign', query: { redirect: Router.currentRoute.value.path } });
        Notify.create({
          type: 'negative',
          message: t('store.signOutNeedAuth'),
        });
      } else {
        Notify.create({
          type: 'warning',
          message: t('store.signOut'),
        });
      }
    },
  },
  getters: {
    isSignIn: (state) => !!(state.user.token),
    user: (state) => state.user,
    token: (state) => state.token,
  },
};
