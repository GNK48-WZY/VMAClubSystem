<template>
  <q-table
    grid
    grid-header
    :rows-per-page-options="[0]"
    :rows="clubList"
    :filter="filter"
    :no-data-label="t('club.noData')"
    :no-results-label="t('club.noResults')"
    class="qt"
  >
    <template v-slot:header>
      <q-intersection transition="slide-left" once class="q-ma-lg search">
        <q-input
          :bg-color="dark.isActive ? 'black' : 'white'"
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
      <q-intersection class="q-pa-md qc" transition="scale" once>
        <q-card>
          <q-img :src="props.row.imgUrl" />

          <q-card-section>
            <router-link :to="{ path: `/club/${props.row.id.toString()}` }">
              <q-btn
                fab
                push
                color="primary"
                icon="launch"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
              >
                <q-tooltip
                  transition-show="flip-right"
                  transition-hide="flip-left"
                  anchor="top middle"
                  self="bottom middle"
                >{{ t('club.viewDetails') }}</q-tooltip>
              </q-btn>
            </router-link>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{ props.row.name }}</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" />
                {{ props.row.location }}
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ props.row.requirement }}</div>
            <div class="text-caption text-grey">{{ props.row.description }}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn flat color="primary" icon="person_add">{{ t('club.signUp') }}</q-btn>
            <q-btn flat color="green" icon="add_shopping_cart">{{ t('club.joinList') }}</q-btn>
          </q-card-actions>
        </q-card>
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
import { computed, ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const store = useStore();
    const { dark } = useQuasar();
    const clubList = computed(() => store.getters['clubs/list']);
    const { t } = useI18n();

    const filter = ref('');
    return {
      dark,
      clubList,
      t,
      filter,
    };
  },
});
</script>
<style lang="scss" scoped>
$card-width: 344px;
.qt {
  .search {
    position: fixed;
    z-index: 1;
    right: 0;
    min-width: 50px;
    opacity: 0.8;
  }
  .qc {
    @media screen and (min-width: $card-width) {
      width: $card-width;
    }
    @media screen and (max-width: $card-width * 2) {
      width: 100%;
    }
  }
}
</style>
