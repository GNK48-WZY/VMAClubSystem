<template>
  <q-drawer bordered v-show="!full">
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm" v-if="isLogin">
          <img :src="user.avatar" />
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
<script setup>
import {
  computed,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const store = useStore();

const full = computed(() => route.meta.full);
const user = computed(() => store.getters['user/user']);
const isLogin = computed(() => store.getters['user/isLogin']);
const userBtnClick = () => (isLogin.value ? store.dispatch('user/logout') : router.push({ name: 'Login' }));

const drawerList = [
  { icon: 'home', name: 'Index', to: { name: 'Index' } },
  { icon: 'school', name: 'ClubCenter', to: { name: 'ClubCenter' } },
  { icon: 'manage_accounts', name: 'UserCenter', to: { name: 'UserCenter' } },
  { icon: 'help', name: 'Help', to: { name: 'Help' } },
];
</script>
