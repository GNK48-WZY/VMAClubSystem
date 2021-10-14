<template>
  <q-intersection transition="jump-up" once>
    <Carousel :list="carouselList" />
  </q-intersection>

  <q-table
    grid
    grid-header
    :rows-per-page-options="[0]"
    :rows="clubList"
    :filter="filter"
    :no-data-label="t('club.noData')"
    :no-results-label="t('club.noResults')"
    class="qt q-pa-md"
  >
    <template v-slot:header>
      <q-intersection transition="slide-left" once class="q-ma-lg search">
        <q-input
          :bg-color="dark.isActive ? 'halfBlack' : 'halfWhite'"
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
      </q-intersection>
    </template>
    <template v-slot:item="props">
      <q-intersection class="col-md-3 col-sm-4 col-12 q-pa-md" transition="scale" once>
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
    const { dark } = useQuasar();
    const carouselList = computed(() => store.getters['clubs/carousel']);
    const clubList = computed(() => store.getters['clubs/list']);
    const { t } = useI18n();

    const filter = ref('');
    return {
      dark,
      clubList,
      carouselList,
      t,
      filter,
    };
  },
  components: {
    Card,
    Carousel,
  },
});
</script>
<style lang="scss" scoped>
.qt {
  .search {
    position: fixed;
    z-index: 1;
    right: 0;
    top: 105px;
    :deep(.q-field__control) {
      backdrop-filter: saturate(180%) blur(20px);
    }
    :deep(.bg-halfBlack) {
      background: rgba(0, 0, 0, 0.5);
    }
    :deep(.bg-halfWhite) {
      background: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
