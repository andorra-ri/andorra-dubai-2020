import Pavilion from './Pavilion.vue';
import Gallery from './Gallery.vue';
import Agenda from './Agenda.vue';
import Hours from './Hours.vue';

export default [
  {
    path: '/pavilion',
    components: {
      default: Pavilion,
      column: Gallery,
      top: Agenda,
      bottom: Hours,
    },
    alias: ['/pavello'],
  },
  { path: '/agenda', redirect: '/pavilion?agenda=true' },
];
