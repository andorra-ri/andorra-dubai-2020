<template>
  <h1>{{ t('expo.tagline') }}</h1>
  <p>{{ t('expo.presence') }}</p>
  <blockquote>
    <p>{{ t('expo.quote') }}</p>
    <span>Marc Galabert - {{ t('expo.cg') }}</span>
  </blockquote>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Expo',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
