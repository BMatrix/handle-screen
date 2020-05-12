import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from "../../ui/pages/Dashboard.vue";
import Language from "../../ui/pages/Language.vue";
import FoodDrinks from "../../ui/pages/FoodDrinks.vue";
import Restaurants from "../../ui/pages/Restaurants.vue";

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
        },
        {
            path: '/category/food-drinks',
            name: 'food-drinks',
            component: FoodDrinks
        },
        {
            path: '/category/food-drinks/restaurants',
            name: 'restaurants',
            component: Restaurants
        }
    ]
});