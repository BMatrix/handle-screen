import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from "../../ui/pages/Dashboard.vue";
import Language from "../../ui/pages/Language.vue";
import FoodDrinks from "../../ui/pages/FoodDrinks.vue";
import Bakeries from "../../ui/pages/fooddrinks/Bakeries.vue";
import Bars from "../../ui/pages/fooddrinks/Bars.vue";
import Coffeeshops from "../../ui/pages/fooddrinks/Coffeeshops.vue";
import Restaurants from "../../ui/pages/fooddrinks/Restaurants.vue";
import Supermarkets from "../../ui/pages/fooddrinks/Supermarkets.vue"

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
            path: '/category/food-drinks/bakeries',
            name: 'bakeries',
            component: Bakeries
        },
        {
            path: '/category/food-drinks/bars',
            name: 'bars',
            component: Bars
        },
        {
            path: '/category/food-drinks/coffeeshops',
            name: 'coffeeshops',
            component: Coffeeshops
        },
        {
            path: '/category/food-drinks/restaurants',
            name: 'restaurants',
            component: Restaurants
        },
        {
            path: '/category/food-drinks/supermarkets',
            name: 'supermarkets',
            component: Supermarkets
        }
    ]
});