<template>
  <q-btn round flat icon="translate">
    <q-tooltip>{{ t('app.language') }}</q-tooltip>
    <q-popup-proxy :offset="[20, 20]" transition-show="jump-down" transition-hide="jump-up">
      <q-list>
        <q-item clickable v-for="item in localeOptions" :key="item.value" @click="use(item.value)">
          <q-item-section :class="item.value !== locale || 'text-primary'">{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-popup-proxy>
  </q-btn>
</template>
<script>
import {
  watch, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { localStorage } = useQuasar();
    const { locale } = useI18n({ useScope: 'global' });

    const localeOptions = [
      { value: 'zh-CN', label: '中文' },
      { value: 'en-US', label: 'English' },
    ];
    async function use(lang) {
      locale.value = lang;
    }

    window.document.documentElement.lang = locale.value;

    watch(locale, async (lang) => {
      localStorage.set('lang', lang);
      window.document.documentElement.lang = lang;
    });
    return {
      t,
      localeOptions,
      locale,
      use,
    };
  },
});
</script>
