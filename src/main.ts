// Styles
import 'normalize.css';
import './assets/styles/init.scss';
import './assets/styles/common.scss';
import './assets/styles/animate.scss';

import registerElementPlusIcons from './global/elementplus-icon';
import { createApp } from 'vue';
import App from './App.vue';

// Plugins

const app = createApp(App);
app.mount('#app');

registerElementPlusIcons(app);
