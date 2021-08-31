<template>
  <h1>{{ t('discover.tagline') }}</h1>
  <p>{{ t('discover.whatever') }}</p>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Main',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
