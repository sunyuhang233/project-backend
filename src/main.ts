// Styles
import 'normalize.css';
import './assets/styles/init.scss';
import './assets/styles/common.scss';
import './assets/styles/animate.scss';
import 'element-plus/theme-chalk/src/message.scss';
import 'virtual:uno.css'
import registerElementPlusIcons from './global/elementplus-icon';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Plugins

const app = createApp(App);
app.use(router)
app.mount('#app');

registerElementPlusIcons(app);
