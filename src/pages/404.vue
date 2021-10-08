<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity:.4">{{ t('app.name') }}</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/club"
        :label="t('404.goTo') + t('pages.ClubCenter')"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
