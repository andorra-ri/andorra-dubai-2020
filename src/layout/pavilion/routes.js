import Pavilion from './Pavilion.vue';
import Gallery from './Gallery.vue';
import Featured from './Featured.vue';

export default [
  {
    path: '/pavilion',
    components: {
      default: Pavilion,
      column: Gallery,
      bottom: Featured,
    },
    alias: ['/', '/pavello'],
  },
];
