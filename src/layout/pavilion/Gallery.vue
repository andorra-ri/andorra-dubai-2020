<template>
  <carousel v-bind="gallery">
    <template #default="{ slide }">
      <webp-image :src="slide" draggable="false" class="cover" />
    </template>
  </carousel>
</template>

<script>
import Carousel from '/@/components/Carousel.vue';
import WebpImage from '/@/components/WebpImage.vue';
import config from '/@/config.yaml';

export default {
  name: 'Gallery',
  components: { Carousel, WebpImage },
  setup() {
    const { gallery } = config.sections.pavilion;
    return { gallery };
  },
};
</script>
