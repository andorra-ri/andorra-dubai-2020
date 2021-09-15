<template>
  <a :href="url" target="blank" class="box">
    <carousel v-bind="gallery" class="cover overlay">
      <template #default="{ slide }">
        <webp-image :src="slide" draggable="false" class="cover" />
      </template>
    </carousel>
    <em>{{ t('tourism.title') }}</em>
    <h2 class="at-bottom">{{ t('tourism.visit') }}<span class="arrow" /></h2>
  </a>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Carousel from '/@/components/Carousel.vue';
import WebpImage from '/@/components/WebpImage.vue';
import config from '/@/config.yaml';

export default {
  name: 'Tourism',
  components: { Carousel, WebpImage },
  setup() {
    const { t, locale } = useI18n();
    const { gallery } = config.sections.discover;

    const url = computed(() => {
      const lang = locale.value === 'ar' ? 'en' : locale.value;
      return `https://visitandorra.com/${lang}`;
    });

    return { t, url, gallery };
  },
};
</script>
