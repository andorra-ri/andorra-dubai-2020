<template>
  <a
    :href="url"
    target="blank"
    class="box tinted">
    <em>{{ t('business.title') }}</em>
    <h2 class="at-bottom">
      {{ t('business.invest') }}
      <span class="arrow" />
    </h2>
  </a>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Business',
  setup() {
    const { t, locale } = useI18n();

    const url = computed(() => {
      const lang = locale.value === 'ca' ? '' : locale.value;
      return `https://www.andorrabusiness.com/${lang}`;
    });

    return { t, url };
  },
};
</script>
