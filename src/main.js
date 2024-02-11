import './assets/sass/all.scss';
import 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { setupVeeValidate } from '@/veeValidateConfigure.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

import i18n from './languages/i18n';

const app = createApp(App);

// setupVeeValidate(app);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(i18n);
app.mount('#app');
