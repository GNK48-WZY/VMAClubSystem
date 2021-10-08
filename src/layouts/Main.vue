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
  ref, defineAsyncComponent, defineComponent, provide,
} from 'vue';

const Header = defineAsyncComponent(() => import('./Header'));
const Drawer = defineAsyncComponent(() => import('./Drawer'));
const Footer = defineAsyncComponent(() => import('./Footer'));
const BottomRightBtns = defineAsyncComponent(() => import('components/BottomRightBtns'));

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
    return {
      BottomRightBtns,
    };
  },
  components: {
    Header,
    Drawer,
    Footer,
    BottomRightBtns,
  },
});
</script>
