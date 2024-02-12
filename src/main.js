import './assets/sass/all.scss';
import 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { setupVeeValidate } from '@/veeValidateConfigure.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'flag-icons/css/flag-icons.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

import i18n from './languages/i18n';

const app = createApp(App);

// setupVeeValidate(app);
library.add(fas, far, fab); // 新增對應風格類型的 icon
app.component('font-awesome-icon', FontAwesomeIcon); // 全域開啟 icon
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(i18n);
app.mount('#app');
