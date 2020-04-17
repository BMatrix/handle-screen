import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from '../../ui/pages/Dashboard.vue';
import Language from '../../ui/pages/Language.vue';
import FoodDrinks from '../../ui/pages/FoodDrinks.vue'

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