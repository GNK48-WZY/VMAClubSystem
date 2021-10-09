<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    :label="t('app.language')"
    style="min-width: 135px;"
    dark
    rounded
    standout
    dense
    emit-value
    map-options
  >
    <template v-slot:prepend>
      <q-icon name="translate" />
    </template>
  </q-select>
</template>
<script>
import {
  watch, computed, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const { t } = useI18n();
    const { localStorage } = useQuasar();
    const { locale } = useI18n({ useScope: 'global' });

    const localeOptions = [
      { value: 'zh-CN', label: '中文' },
      { value: 'en-US', label: 'English' },
    ];
    const routeName = computed(() => route.name);

    watch(locale, async (lang) => {
      localStorage.set('lang', lang);
      window.document.title = `${t(`pages.${routeName.value}`)}-${t('app.name')}`;
    });
    return {
      t,
      localeOptions,
      locale,
    };
  },
});
</script>
