<template>
  <h1>{{ t('expo.tagline') }}</h1>
  <p>{{ t('expo.presence') }}</p>
  <p>{{ t('expo.delve') }}</p>
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
