import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n'
// import {marked} from "marked";
const bootstrap = require('bootstrap')
require('@/assets/main.scss');


// const markedMixin = {
//     methods: {
//         md: function (input) {
//             return marked (input);
//         },
//     },
// };
//.mixin(markedMixin)

createApp(App)
    .use(i18n)
    .use(router)
    .use(bootstrap)

    .mount('#app')
