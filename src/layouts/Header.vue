<template>
    <q-header
        :class="full ? 'bg-transparent text-primary' : 'bg-primary text-white'"
        :elevated="!full"
    >
        <q-toolbar>
            <q-btn
                flat
                round
                icon="menu"
                aria-label="Menu"
                @click="emit('toggleDrawer')"
                v-show="!full"
            />
            <div style="margin: 12px 12px 0 0; position: absolute;right: 0;top: 0;">
                <LanguageSwitcher />
            </div>
        </q-toolbar>
        <q-toolbar inset>
            <q-toolbar-title>
                {{ t('app.name') }} -
                <strong>{{ pageName }}</strong>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script>
import {
  computed, defineAsyncComponent, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const LanguageSwitcher = defineAsyncComponent(() => import('components/LanguageSwitcher'));

export default defineComponent({
  emits: ['toggleDrawer'],
  setup(_props, { emit }) {
    const { t } = useI18n();
    const route = useRoute();

    const full = computed(() => route.meta.full);
    const pageName = computed(() => t(route.name ? `pages.${route.name}` : 'information.error'));
    return {
      t,
      full,
      pageName,
      emit,
    };
  },
  components: {
    LanguageSwitcher,
  },
});
</script>
