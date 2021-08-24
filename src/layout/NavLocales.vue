<template>
  <ul class="nav-locales">
    <li
      v-for="locale in locales"
      :key="locale"
      :class="[`lang-${locale}`, { active: isActive(locale) }]"
      @click="changeLocale(locale)">
      {{ t(`locales.${locale}`) }}
    </li>
  </ul>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { changeLocale } from '/@/i18n';
import { localization } from '/@/config.yaml';

const { locales } = localization;

export default {
  setup() {
    const { t, locale: active } = useI18n();
    const isActive = locale => locale === active.value;
    return { t, locales, changeLocale, isActive };
  },
};
</script>

<style lang="scss" scoped>
.nav-locales {
  display: flex;
  text-transform: uppercase;

  li {
    padding: 0.5rem;
    cursor: pointer;

    &.active { font-weight: bold; }
  }
}
</style>
