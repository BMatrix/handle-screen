import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from '../../ui/pages/Dashboard';
import Language from '../../ui/pages/Language.vue';

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/language',
            name: 'language',
            component: Language
        }
    ]
});