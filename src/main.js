import Vue from 'vue';
import Notifications from 'vue-notification';
import VueTheMask from 'vue-the-mask';
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from '../store';
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(VueTheMask);

const router = new VueRouter({
    routes,
    mode: 'history',
});

// eslint-disable-next-line no-new
new Vue({
    router,
    store,
    el: '#app',
    render: (h) => h(App),
});
