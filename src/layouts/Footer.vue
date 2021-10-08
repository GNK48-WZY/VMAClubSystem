<template>
    <q-footer v-show="!full" class="lt-sm">
        <q-tabs align="justify">
            <q-route-tab
                v-for="item in tabList"
                :icon="item.icon"
                :label="t(`pages.${item.name}`)"
                :key="item.name"
                :to="item.to"
                exact
            />
        </q-tabs>
    </q-footer>
</template>
<script>
import {
  computed, defineComponent, inject,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const full = computed(() => route.meta.full);
    const tabList = inject('goList');
    return {
      t,
      full,
      tabList,
    };
  },
});
</script>
