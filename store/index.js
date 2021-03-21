import Vue from 'vue';
import Vuex from 'vuex';
import plano from './module/plano';
import user from './module/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        plano,
        user,
    },
});
