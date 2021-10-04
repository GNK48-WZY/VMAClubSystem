import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { LocalStorage } from 'quasar';
import clubs from './clubs';
import user from './user';

const Store = createStore({
  modules: {
    clubs,
    user,
  },
  strict: process.env.DEBUGGING,
  plugins: [createPersistedState({
    paths: ['user'],
    storage: {
      getItem: (key) => LocalStorage.getItem(key),
      setItem: (key, value) => LocalStorage.set(key, value),
      removeItem: (key) => LocalStorage.remove(key),
    },
  })],
});
export { Store };
export default store((/* { ssrContext } */) => Store);
