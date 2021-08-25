import Pavilion from './Pavilion.vue';
import Gallery from './Gallery.vue';
import Agenda from './Agenda.vue';
import Featured from './Featured.vue';

export default [
  {
    path: '/pavilion',
    components: {
      default: Pavilion,
      column: Gallery,
      top: Agenda,
      bottom: Featured,
    },
    alias: ['/', '/pavello'],
  },
  { path: '/agenda', redirect: '/pavilion?agenda=true' },
];
