<template>
  <div :class="`wrapper lang-${locale}`">
    <main id="main" class="container box">
      <header>
        <img id="main-logo" v-svg-inline src="/images/brand.svg">
        <nav-locales />
      </header>
      <div class="at-bottom">
        <router-view />
      </div>
      <router-link :to="`/${nextSection}`" class="nav-next">
        {{ t(`${nextSection}.tagline`) }}<span class="arrow" />
      </router-link>
    </main>
    <section id="column">
      <router-view name="column" />
    </section>
    <section id="top">
      <router-view name="top" />
    </section>
    <section id="bottom">
      <router-view name="bottom" />
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import NavLocales from '/@/layout/NavLocales.vue';
import config from '/@/config.yaml';

export default {
  name: 'App',
  components: { NavLocales },
  setup() {
    const { t, locale } = useI18n();

    const nextSection = computed(() => {
      const sections = Object.keys(config.sections);
      // Current section
      const { matched: [route] = [] } = useRoute();
      const path = route?.aliasOf?.path || route?.path;
      const index = Math.max(0, sections.indexOf(path?.substring(1)));
      // Next section
      const next = (index + 1) % sections.length;
      return sections[next];
    });

    return { t, locale, nextSection };
  },
};
</script>
