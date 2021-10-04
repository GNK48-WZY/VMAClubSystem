import { api } from 'boot/axios';
import { Router } from 'src/router';

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
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
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
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject('incompleteForm');
        }
      });
    },
    async logout({ commit }) {
      commit('setUser', { user: { token: false } });
      if (Router.currentRoute.value.meta.needAuth) {
        Router.push({ name: 'Index' });
      }
    },
  },
  getters: {
    isLogin: (state) => !!(state.user.token),
    user: (state) => state.user,
    token: (state) => state.token,
  },
};
