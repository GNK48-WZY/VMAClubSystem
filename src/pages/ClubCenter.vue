<template>
  <Carousel :list="carouselList" />

  <q-table
    grid
    grid-header
    :rows-per-page-options="[0]"
    :rows="clubList"
    :filter="filter"
    :no-data-label="t('club.noData')"
    :no-results-label="t('club.noResults')"
    class="q-pa-md"
  >
    <template v-slot:header>
      <q-input
        class="search"
        color="primary"
        outlined
        rounded
        debounce="300"
        v-model="filter"
        :label="t('club.search')"
        clearable
        clear-icon="close"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:item="props">
      <q-intersection class="col-md-3 col-sm-4 col-12 q-pa-md">
        <Card
          :id="props.row.id"
          :name="props.row.name"
          :img="props.row.imgUrl"
          :requirement="props.row.requirement"
          :description="props.row.description"
          :location="props.row.location"
        />
      </q-intersection>
    </template>
    <template v-slot:no-data="{ message }">
      <div class="text-primary column fit">
        <div class="text-h4 col self-center">
          <q-icon name="sentiment_dissatisfied" />
          {{ message }}
        </div>
      </div>
    </template>
  </q-table>
</template>
<script>
import { useStore } from 'vuex';
import {
  computed, ref, defineComponent,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

import Carousel from 'components/club/Carousel';
import Card from 'components/club/Card';

export default defineComponent({
  setup() {
    const store = useStore();
    const carouselList = computed(() => store.getters['clubs/carousel']);
    const clubList = computed(() => store.getters['clubs/list']);
    const { t } = useI18n();
    const q = useQuasar();

    const filter = ref('');
    return {
      clubList,
      carouselList,
      t,
      filter,
      q,
    };
  },
  components: {
    Card,
    Carousel,
  },
});
</script>
<style lang="scss" scoped>
.search {
  position: fixed;
  z-index: 1;
  right: 0;
  top: 90px;
  right: 20px;
  :deep(.q-field__control) {
    backdrop-filter: saturate(180%) blur(20px);
  }
}
.body--light {
  .search :deep(.q-field__control) {
    background: rgba(255, 255, 255, 0.5);
    color: #70757a;
  }
}

.body--dark {
  .search :deep(.q-field__control) {
    background: rgba(0, 0, 0, 0.5);
    color: #9aa0a6;
  }
}
</style>
