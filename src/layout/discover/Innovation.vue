<template>
  <a :href="url" target="blank" class="box">
    <em>{{ t('innovation.title') }}</em>
    <h2 class="at-bottom">{{ t('innovation.join') }}<span class="arrow" /></h2>
  </a>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Innovation',
  setup() {
    const { t, locale } = useI18n();

    const url = computed(() => {
      const lang = locale.value === 'ca' ? '' : 'en';
      return `https://www.ari.ad/${lang}`;
    });

    return { t, url };
  },
};
</script>
