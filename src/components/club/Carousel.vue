<template>
    <q-carousel
        animated
        v-model="current"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        height="calc(50vh)"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
    >
        <q-carousel-slide
            v-for="item in list"
            :key="item.id"
            :name="item.id"
            :img-src="item.imgUrl"
        >
            <div class="absolute-bottom caption" :class="dark.isActive ? 'dark' : 'light'">
                <div class="text-h2">{{ item.name }}</div>
                <div class="text-subtitle1">{{ item.description }}</div>
            </div>
        </q-carousel-slide>
    </q-carousel>
</template>
<script>
import {
  defineComponent, ref,
} from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { dark } = useQuasar();

    const current = ref(0);
    const autoplay = ref(false);
    return {
      dark,
      current,
      autoplay,
    };
  },
});
</script>
<style lang="scss" scoped>
.caption {
    text-align: center;
    padding: 52px;
    color: white;
    &.dark {
        background-image: linear-gradient(
            rgba(17, 19, 25, 0) 2%,
            rgb(17, 19, 25) 94%
        );
    }
    &.light {
        background-image: linear-gradient(
            rgb(255, 255, 255, 0) 90%,
            rgb(255, 255, 255) 100%
        );
    }
}
</style>
