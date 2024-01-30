// Styles
import 'normalize.css';
import './assets/styles/init.scss';
import './assets/styles/common.scss';
import './assets/styles/animate.scss';
import 'element-plus/theme-chalk/src/message.scss';
import 'virtual:uno.css'

import "swiper/css";
import "swiper/css/navigation";
import registerElementPlusIcons from './global/elementplus-icon';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import registerStore from './stores/pinia';
import "default-passive-events";
// Plugins
import * as echarts from "./global/echarts"
import VueCharts from "vue-echarts";
const app = createApp(App);
registerStore(app)
registerElementPlusIcons(app);
app.component("VChart", VueCharts);
app.use(router)
app.mount('#app');