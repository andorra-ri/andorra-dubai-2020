<template>
  <div class="box">
    <em>{{ t('hours.opening') }}</em>
    <div class="at-bottom">
      <h3>{{ t('hours.visitors.title') }}</h3>
      {{ t('hours.visitors.days') }}
      <br>10am - 10pm
    </div>
    <div>
      <h3>{{ t('hours.business.title') }}</h3>
      {{ t('hours.business.days') }}
      <br>10am - 5pm
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Hours',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
