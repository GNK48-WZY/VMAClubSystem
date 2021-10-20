<template>
  <q-drawer v-model="drawer.model" show-if-above :mini="drawer.mini" :width="190">
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item class="item" clickable v-ripple v-for="item in list" :key="item.name" :to="item.to">
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
  computed, defineComponent, inject, watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const quasar = useQuasar();

    const drawer = inject('drawer');
    const list = inject('goList');
    const show = computed(() => route.meta.showDrawer ?? true);
    watch(show, async (v) => {
      if (quasar.screen.gt.sm) {
        drawer.model = v;
      } else if (!v) {
        drawer.model = false;
      }
    });
    return {
      t,
      list,
      drawer,
    };
  },

});
</script>
<style lang="scss" scoped>
.body--light {
  .item {
    color: #70757a;
  }
}

.body--dark {
  .item {
    color: #9aa0a6;
  }
}
.item {
  &.q-router-link--active {
    color: $primary;
  }
  .q-item__section {
    letter-spacing: 0.01785714em;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
  margin: 8px 0;
  line-height: 24px;
  border-radius: 0 24px 24px 0;
  margin-right: 12px;
}
</style>
