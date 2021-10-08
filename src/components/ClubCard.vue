<template>
  <q-intersection class="q-pa-md card" transition="scale" once>
    <q-card>
      <q-img :src="img" />

      <q-card-section>
        <router-link :to="{ path: `/club/${id.toString()}` }">
          <q-btn
            fab
            push
            color="primary"
            icon="launch"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          >
            <q-tooltip
              transition-show="flip-right"
              transition-hide="flip-left"
              anchor="top middle"
              self="bottom middle"
            >{{ t("club.viewDetails") }}</q-tooltip>
          </q-btn>
        </router-link>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ name }}</div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            {{ location }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ requirement }}</div>
        <div class="text-caption text-grey">{{ description }}</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat color="primary" icon="person_add">{{ t("club.signUp") }}</q-btn>
        <q-btn flat color="green" icon="add_shopping_cart">
          {{
            t("club.joinList")
          }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-intersection>
</template>
<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    img: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    requirement: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
<style lang="scss" scoped>
$card-width: 344px;
.card {
  @media screen and (min-width: $card-width) {
    width: $card-width;
  }
  @media screen and (max-width: $card-width * 2) {
    width: 100%;
  }
}
</style>
