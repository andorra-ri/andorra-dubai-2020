<template>
  <div class="wrapper">
    <main id="main" class="container box">
      <header>
        <img id="main-logo" v-svg-inline src="/images/brand.svg">
        <nav-locales />
      </header>
    </main>
    <section id="column">
    </section>
    <section id="top">
    </section>
    <section id="bottom">
    </section>
  </div>
</template>

<script>
import NavLocales from '/@/layout/NavLocales.vue';
export default {
  name: 'App',
  components: { NavLocales },
  setup() {
    return {};
  },
};
</script>
