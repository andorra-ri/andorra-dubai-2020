import Discover from './Discover.vue';
import Tourism from './Tourism.vue';
import Business from './Business.vue';
import Innovation from './Innovation.vue';

export default [{
  path: '/discover',
  components: {
    default: Discover,
    column: Tourism,
    top: Business,
    bottom: Innovation,
  },
  alias: ['/', '/descobreix'],
}];
