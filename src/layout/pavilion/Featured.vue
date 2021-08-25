<template>
  <div class="box centered">
    <em>{{ t('pavilion.featured_experience') }}</em>
    <img src="/images/oculus.png" draggable="false" class="item at-center">
    <h3>{{ t('pavilion.immersion_360') }}</h3>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
