<template>
  <q-layout view="hHh Lpr fFf">
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
  ref, defineComponent, provide,
} from 'vue';

import BottomRightBtns from 'components/BottomRightBtns';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';

export default defineComponent({
  setup() {
    const drawer = ref(true);
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
