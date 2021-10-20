<template>
  <q-carousel
    animated
    v-model="current"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    class="carousel"
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide v-for="item in list" :key="item.id" :name="item.id" :img-src="item.imgUrl">
      <div class="caption">
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

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const current = ref(0);
    const autoplay = ref(true);
    return {
      current,
      autoplay,
    };
  },
});
</script>
<style lang="scss" scoped>
.caption {
  text-align: center;
  padding: 18px 100px 38px 100px;
  margin-bottom: 14px;
  backdrop-filter: saturate(180%) blur(20px);
  border-radius: 10px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  min-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.body--light {
  .caption {
    background: rgba(255, 255, 255, 0.5);
  }
}

.body--dark {
  .caption {
    background: rgba(0, 0, 0, 0.5);
  }
}
.carousel {
  height: calc(55vh);
  width: 100%;
}
</style>
