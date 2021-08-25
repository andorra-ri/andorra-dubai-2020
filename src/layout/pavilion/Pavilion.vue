<template>
  <h1>{{ t('pavilion.tagline') }}</h1>
  <p>{{ t('pavilion.message') }}</p>
  <p>{{ t('pavilion.design') }}</p>
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
