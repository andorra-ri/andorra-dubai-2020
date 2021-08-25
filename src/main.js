import { createApp } from 'vue';
import SvgInline from 'vue-svg-inline-plugin';
import i18n from './i18n';
import router from './router';
import App from './App.vue';

import 'reset-css';
import './styles/main.scss';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(SvgInline);
app.mount('#app');
