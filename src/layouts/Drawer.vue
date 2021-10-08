<template>
  <q-drawer v-model="drawer" show-if-above elevated v-show="!full" :width="250" no-swipe-open>
    <q-img
      class="absolute-top"
      :src="require('assets/image/background/drawer.png')"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm" v-if="isLogin">
          <img :src="!!user.avatar ? user.avatar : require('assets/image/user/avatar.png')" />
        </q-avatar>
        <div class="text-weight-bold">{{ isLogin ? user.name : t('user.notLogin') }}</div>
        <div v-if="isLogin">{{ user.id }}</div>
        <div v-if="isLogin">{{ user.email }}</div>
        <q-btn
          rounded
          push
          :color="isLogin ? 'red' : 'green'"
          :label="t(`user.${isLogin ? 'logOut' : 'login'}`)"
          @click="userBtnClick"
          class="absolute-bottom-right"
          style="margin:0 18px 18px 0;"
        />
      </div>
    </q-img>

    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
      <q-list padding>
        <q-item clickable v-ripple v-for="item in drawerList" :key="item.name" :to="item.to">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ t(`pages.${item.name}`) }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
import {
  computed, defineComponent, inject,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const full = computed(() => route.meta.full);
    const user = computed(() => store.getters['user/user']);
    const isLogin = computed(() => store.getters['user/isLogin']);
    const userBtnClick = () => (isLogin.value ? store.dispatch('user/logout') : router.push({ name: 'Login', query: { redirect: route.path } }));
    const drawer = inject('drawer');
    const drawerList = inject('goList');
    return {
      t,
      full,
      user,
      isLogin,
      userBtnClick,
      drawerList,
      drawer,
    };
  },
});
</script>
