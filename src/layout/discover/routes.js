import Discover from './Discover.vue';
import Tourism from './Tourism.vue';
import Business from './Business.vue';
import Research from './Research.vue';

export default [{
  path: '/discover',
  components: {
    default: Discover,
    column: Tourism,
    top: Business,
    bottom: Research,
  },
  alias: ['/', '/descobreix'],
}];
