<template>
  <a :href="address" target="blank" class="box">
    <em>{{ t('location.district') }}</em>
    <div class="at-bottom">
      <h2>{{ t('location.find_us') }}<span class="arrow" /></h2>
    </div>
  </a>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Map',
  setup() {
    const { t, locale } = useI18n();
    const address = computed(() => `https://www.expo2020dubai.com/${locale.value}/understanding-expo/participants/country-pavilions/andorra#js-map-container`);
    return { t, address };
  },
};
</script>

<style lang="scss" scoped>
.map {
  min-height: 200px;
}
</style>

