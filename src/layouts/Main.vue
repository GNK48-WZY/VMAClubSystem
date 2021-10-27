<template>
  <q-layout view="hHh Lpr fFf" class="layout">
    <Header />
    <Drawer />
    <Footer />
    <q-page-container>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      <BottomRightBtns />
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  reactive, defineComponent, provide, computed,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';

import BottomRightBtns from 'components/BottomRightBtns';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const meta = () => ({
      title: computed(() => t(route.name ? `pages.${route.name}` : 'information.error')).value,
      titleTemplate: (title) => `${title} | ${t('app.name')}`,
      meta: {
        description: { name: 'description', content: 'Page 1' },
        keywords: { name: 'keywords', content: 'Quasar website' },
        equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      },
    });
    useMeta(meta);

    const drawer = reactive({
      mini: false,
      model: true,
    });
    const goList = [
      { icon: 'home', name: 'Index', to: { name: 'Index' } },
      { icon: 'school', name: 'ClubCenter', to: { name: 'ClubCenter' } },
      { icon: 'manage_accounts', name: 'UserCenter', to: { name: 'UserCenter' } },
      { icon: 'help', name: 'Help', to: { name: 'Help' } },
    ];
    provide('goList', goList);
    provide('drawer', drawer);
  },
  components: {
    Header,
    Drawer,
    Footer,
    BottomRightBtns,
  },
});
</script>
<style lang="scss" scoped>
.body--light {
  .layout {
    background: #fff;
    color: #70757a;
  }
}

.body--dark {
  .layout {
    background: var(--q-dark);
    color: #9aa0a6;
  }
}
</style>
