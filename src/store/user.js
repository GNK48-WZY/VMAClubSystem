import { api } from 'boot/axios';
import { Router } from 'src/router';
import { Notify } from 'quasar';
import { i18n } from 'src/boot/i18n';

const { global: { t } } = i18n;

async function loginSuccess() {
  Notify.create({
    type: 'positive',
    message: t('login.message.success'),
  });
}
async function loginFail(error) {
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
    async mockLogin({ commit }) {
      return new Promise((resolve) => {
        commit('setUser', {
          name: '测试用户',
          id: 123456,
          email: 'test@vma.edu.cn',
          token: 'test-token',
        });
        loginSuccess();
        resolve();
      });
    },
    async login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        if (!!email && !!password) {
          api({
            url: '/login',
            method: 'post',
            data: {
              email: `${email}@vma.edu.cn`,
              password,
            },
          })
            .then((response) => response.data)
            .then((data) => {
              commit('setUser', data);
              loginSuccess();
              resolve(data);
            })
            .catch((error) => {
              loginFail(error);
              reject(error);
            });
        } else {
          loginFail('incompleteForm');
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
              email: `${email}@vma.edu.cn`,
              password,
            },
          })
            .then((response) => response.data)
            .then((data) => {
              commit('setUser', data);
              loginSuccess();
              resolve(data);
            })
            .catch((error) => {
              loginFail(error);
              reject(error);
            });
        } else {
          loginFail('incompleteForm');
          reject('incompleteForm');
        }
      });
    },
    async logout({ commit }) {
      commit('setUser', { user: { token: false } });
      if (Router.currentRoute.value.meta.needAuth) {
        Router.push({ name: 'Login', query: { redirect: Router.currentRoute.value.path } });
        Notify.create({
          type: 'negative',
          message: t('store.logOutNeedAuth'),
        });
      } else {
        Notify.create({
          type: 'warning',
          message: t('store.logOut'),
        });
      }
    },
  },
  getters: {
    isLogin: (state) => !!(state.user.token),
    user: (state) => state.user,
    token: (state) => state.token,
  },
};
