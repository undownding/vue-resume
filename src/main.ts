import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';

import './assets/css/main.css';

import i18n from '@/i18n';

const app = createApp(App);

app.use(i18n);
app.use(VueEasyLightbox);
app.use(router);
app.use(createPinia());

app.mount('#app');
