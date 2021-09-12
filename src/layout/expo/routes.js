import Expo from './Expo.vue';
import Gallery from './Gallery.vue';
import MoreInfo from './MoreInfo.vue';
import Location from './Location.vue';

export default [{
  path: '/expo',
  components: {
    default: Expo,
    column: Gallery,
    top: MoreInfo,
    bottom: Location,
  },
  alias: ['/'],
}];
