<template>
  <expandable
    :open="query.agenda"
    :size="{ width: 'calc(35vw + 20rem)', height: '100vh' }"
    direction="lb"
    class="tinted">
    <template #toggler>
      <div class="box">
        <em>{{ t('agenda.title') }}</em>
        <h2 class="at-bottom">
          {{ t('agenda.explore_events') }}
          <span class="arrow" />
        </h2>
      </div>
    </template>
    <div class="box">
      <ul class="agenda">
        <li
          v-for="event in agenda"
          :key="event._id"
          :class="{ 'has-passed': hasPassed(event) }">
          <em>{{ eventDate(event) }}</em>
          <h3>{{ event[`name_${locale}`] }}</h3>
          <p>{{ event[`description_${locale}`] }}</p>
        </li>
      </ul>
    </div>
  </expandable>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import Expandable from '/@/components/Expandable.vue';
import api from '/@/api.service';
import config from '/@/config.yaml';

const { agenda: bla } = config.sections.pavilion;

export default {
  name: 'Agenda',
  components: { Expandable },
  setup() {
    const { t, locale } = useI18n();
    const { query } = useRoute();
    const agenda = ref([]);

    const hasPassed = ({ from, until }) => new Date(until || from) < new Date();

    const eventDate = event => {
      const formatter = new Intl.DateTimeFormat(locale.value, bla.date);
      const from = formatter.format(new Date(event.from));
      const until = event.until && formatter.format(new Date(event.until));
      return `${from} ${until ? `- ${until}` : ''}`;
    };

    const loadAgenda = async () => {
      agenda.value = await api.getAgenda(locale.value);
    };

    watch(locale, loadAgenda);
    onMounted(() => loadAgenda());

    return { t, locale, query, agenda, hasPassed, eventDate };
  },
};
</script>

<style lang="scss" scoped>
.agenda {
  margin: 2rem;

  li + li { margin-top: 4em; }

  .has-passed { opacity: 0.25; }
}
</style>
