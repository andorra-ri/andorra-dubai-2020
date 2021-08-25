<template>
  <a :href="url" target="blank" class="box">
    <img :src="image" class="cover">
    <em>{{ t('tourism.title') }}</em>
    <h2 class="at-bottom">{{ t('tourism.visit') }}<span class="arrow" /></h2>
  </a>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import config from '/@/config.yaml';

export default {
  name: 'Tourism',
  setup() {
    const { t, locale } = useI18n();
    const { image } = config.sections.discover;

    const url = computed(() => {
      const lang = locale.value === 'ar' ? 'en' : locale.value;
      return `https://visitandorra.com/${lang}`;
    });

    return { t, url, image };
  },
};
</script>
