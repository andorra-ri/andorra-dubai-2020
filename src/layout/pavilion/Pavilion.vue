<template>
  <h1>{{ t('pavilion.tagline') }}</h1>
  <blockquote>
    <p>
      <big>Andorra: Innovation Living Lab</big>
    </p>
  </blockquote>
  <p>{{ t('pavilion.message') }}</p>
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
