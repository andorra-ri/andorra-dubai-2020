<template>
  <carousel v-bind="gallery">
    <template #default="{ slide }">
      <img :src="slide" draggable="false" class="cover">
    </template>
  </carousel>
</template>

<script>
import Carousel from '/@/components/Carousel.vue';
import config from '/@/config.yaml';

export default {
  name: 'Gallery',
  components: { Carousel },
  setup() {
    const { gallery } = config.sections.expo;
    return { gallery };
  },
};
</script>
