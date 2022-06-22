import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n'
const bootstrap = require('bootstrap')
require('@/assets/main.scss');

createApp(App)
    .use(i18n)
    .use(router)
    .use(bootstrap)
    .mount('#app')
