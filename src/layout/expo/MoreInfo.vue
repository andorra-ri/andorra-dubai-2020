<template>
  <a
    :href="`https://www.expo2020dubai.com/${locale}`"
    target="blank"
    class="box tinted">
    <em>{{ t('expo.the_expo') }}</em>
    <h2 class="at-bottom">
      {{ t('expo.more_info') }}
      <span class="arrow" />
    </h2>
  </a>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'MoreInfo',
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
};
</script>
