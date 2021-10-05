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
<script setup>
import {
  watch, $fromRefs, $raw, defineProps, $computed,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();
const { localStorage, dark } = useQuasar();
const { locale } = $fromRefs(useI18n({ useScope: 'global' }));

const localeOptions = [
  { value: 'zh-CN', label: '中文' },
  { value: 'en-US', label: 'English' },
];
const routeName = $computed(() => route.name);

watch($raw(locale), async (lang) => {
  localStorage.set('lang', lang);
  window.document.title = `${t(`pages.${routeName}`)}-${t('app.name')}`;
});
defineProps(['color']);
</script>
