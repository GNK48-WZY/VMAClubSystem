<template>
  <q-intersection transition="jump-up" once>
    <q-select
      v-model="locale"
      :options="localeOptions"
      :label="t('app.language')"
      style="min-width: 135px;"
      :color="color"
      :bg-color="dark.isActive ? 'black' : 'white'"
      rounded
      outlined
      dense
      emit-value
      map-options
    >
      <template v-slot:prepend>
        <q-icon name="translate" />
      </template>
    </q-select>
  </q-intersection>
</template>
<script>
import {
  watch, computed, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

export default defineComponent({
  props: ['color'],
  setup() {
    const route = useRoute();
    const { t } = useI18n();
    const { localStorage, dark } = useQuasar();
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
      dark,
      localeOptions,
      locale,
    };
  },
});
</script>
