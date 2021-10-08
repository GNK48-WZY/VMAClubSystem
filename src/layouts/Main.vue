<template>
  <q-layout view="hHh Lpr fFf">
    <Header @toggleDrawer="toggleDrawer" />
    <Drawer v-model="drawer" show-if-above />

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
  ref, defineAsyncComponent, defineComponent,
} from 'vue';

const Header = defineAsyncComponent(() => import('./Header'));
const Drawer = defineAsyncComponent(() => import('./Drawer'));
const BottomRightBtns = defineAsyncComponent(() => import('components/BottomRightBtns'));

export default defineComponent({
  setup() {
    const drawer = ref(true);
    async function toggleDrawer() {
      drawer.value = !drawer.value;
    }
    return {
      BottomRightBtns,
      drawer,
      toggleDrawer,
    };
  },
  components: {
    Header,
    Drawer,
    BottomRightBtns,
  },
});
</script>
