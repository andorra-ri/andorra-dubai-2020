import Pavilion from './Pavilion.vue';
import Gallery from './Gallery.vue';

export default [
  {
    path: '/pavilion',
    components: {
      default: Pavilion,
      column: Gallery,
    },
    alias: ['/', '/pavello'],
  },
];
