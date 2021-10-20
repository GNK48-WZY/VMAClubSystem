<template>
  <q-header class="header" height-hint="64" elevated v-if="show">
    <q-toolbar style="height: 64px">
      <q-btn flat dense round @click="toggleDrawer" icon="menu" />
      <q-toolbar-title shrink class="row items-center no-wrap">
        <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg" />
        <span class="q-ml-sm">
          {{ t('app.name') }} -
          <strong>{{ pageName }}</strong>
        </span>
      </q-toolbar-title>
      <q-space />
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat icon="apps">
          <q-tooltip>Google Apps</q-tooltip>
        </q-btn>
        <q-btn round dense flat icon="notifications" v-if="isSignIn">
          <q-badge color="red" text-color="white" floating>2</q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <LanguageSwitcher />
        <q-btn round flat v-if="isSignIn">
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
          <q-popup-proxy :offset="[0, 20]" transition-show="jump-down" transition-hide="jump-up">
            <q-card flat bordered class="user-card">
              <div class="avatar-container column">
                <q-avatar size="80px" class="col self-center" v-if="isSignIn">
                  <img :src="user.avatar || require('assets/image/user/avatar.png')" />
                </q-avatar>
                <div class="q-mt-md text-weight-bold col self-center">{{ user.name }}</div>
                <div class="col self-center">{{ user.id }}</div>
                <div class="q-mb-md col self-center">{{ user.email }}</div>
                <q-btn
                  class="col self-center"
                  :label="t('user.manage')"
                  @click="goToUser"
                  outline
                  rounded
                />
              </div>
              <q-separator />
              <div class="action-container column">
                <q-btn outline :label="t('user.signOut')" @click="signOut" class="col self-center" />
              </div>
              <q-separator />
              <div class="footer-container column">
                <div class="col self-center row justify-evenly">
                  <q-btn flat size="sm" :label="t('user.policy')" class="col" />
                  <q-btn flat size="sm" :label="t('user.service')" class="col" />
                </div>
              </div>
            </q-card>
          </q-popup-proxy>
        </q-btn>
        <q-btn
          color="primary"
          :label="t('user.signIn')"
          v-if="!isSignIn && !isSignInPage"
          @click="signIn"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import {
  computed, defineComponent, inject,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const show = computed(() => route.meta.showHeader ?? true);
    const pageName = computed(() => t(route.name ? `pages.${route.name}` : 'information.error'));
    const user = computed(() => store.getters['user/user']);
    const isSignIn = computed(() => store.getters['user/isSignIn']);
    const isSignInPage = computed(() => route.name === 'Sign');

    const signOut = () => store.dispatch('user/signOut');
    const signIn = () => router.push({ name: 'Sign', query: { redirect: route.path } });
    const goToUser = () => router.push({ name: 'UserCenter' });

    const drawer = inject('drawer');
    async function toggleDrawer() {
      drawer.mini = !drawer.mini;
      drawer.model = true;
    }
    return {
      t,
      show,
      pageName,
      toggleDrawer,
      user,
      isSignIn,
      isSignInPage,
      signOut,
      signIn,
      goToUser,
    };
  },
  components: {
    LanguageSwitcher,
  },

});
</script>
<style lang="scss" scoped>
.body--light {
  .header,
  .user-card {
    background: #fff;
    color: #70757a;
  }
}

.body--dark {
  .header,
  .user-card {
    background: var(--q-dark);
    color: #9aa0a6;
  }
}
.user-card {
  max-height: calc(100vh - 62px - 100px);
  width: 270px;
  .avatar-container {
    margin: 20px 33px;
  }
  .action-container {
    margin: 16px;
  }
  .footer-container {
    margin: 14px 33px;
  }
}
</style>
