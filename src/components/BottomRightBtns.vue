<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]" v-show="show">
    <q-intersection transition="rotate" once>
      <q-fab icon="add" direction="up" vertical-actions-align="right">
        <q-fab-action label-position="left" color="primary" icon="mail" label="Email" />
      </q-fab>
    </q-intersection>
  </q-page-sticky>
</template>
<script>
import {
  computed, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const show = computed(() => route.meta.showBRB ?? true);

    return {
      t,
      show,
    };
  },

});
</script>
