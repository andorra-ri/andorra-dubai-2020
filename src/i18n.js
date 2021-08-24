import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages'; // eslint-disable-line import/no-unresolved
import { localization } from '/@/config.yaml';

const i18n = createI18n({
  fallbackLocale: localization.fallback,
  messages,
});

export const changeLocale = async locale => {
  i18n.global.locale.value = locale;
  document.querySelector('html').setAttribute('lang', locale);
  document.title = i18n.global.t('title');
};

// Set default locale
changeLocale(localization.default);

export default i18n;
