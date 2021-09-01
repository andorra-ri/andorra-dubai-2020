<template>
  <aside id="contact">
    <section class="email">
      <a href="mailto:info@andorraexpo2020dubai.ad">
        {{ t('contact.get_in_touch') }}
      </a>
    </section>
    <section>
      {{ t('contact.follow_us') }}
      <ul class="nav-social">
        <li v-for="(url, platform) in social" :key="platform">
          <a :href="url" target="blank" :title="platform">
            <img :src="`images/${platform}.svg`">
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { social } from '/@/config.yaml';

export default {
  setup() {
    const { t } = useI18n();
    return { t, social };
  },
};
</script>
