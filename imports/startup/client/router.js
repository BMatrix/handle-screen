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

import Healthcare from "../../ui/pages/Healthcare.vue";
import Doctors from "../../ui/pages/healthcare/Doctors.vue";
import Hospitals from "../../ui/pages/healthcare/Hospitals.vue";
import Pharmacies from "../../ui/pages/healthcare/Pharmacies.vue";
import Psychologists from "../../ui/pages/healthcare/Psychologists.vue";

import Museums from "../../ui/pages/Museums.vue";
import Arts from "../../ui/pages/museums/Arts.vue";
import CityTours from "../../ui/pages/museums/CityTours.vue";
import History from "../../ui/pages/museums/History.vue";
import Science from "../../ui/pages/museums/Science.vue";

import Sports from "../../ui/pages/Sports.vue";
import BasketballCourts from "../../ui/pages/sports/BasketballCourts.vue";
import FootballCourts from "../../ui/pages/sports/FootballCourts.vue";
import Gyms from "../../ui/pages/sports/Gyms.vue";
import RunningTracks from "../../ui/pages/sports/RunningTracks.vue";
import SwimmingPools from "../../ui/pages/sports/SwimmingPools.vue";
import YogaStudios from "../../ui/pages/sports/YogaStudios.vue";


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
        },



        {
            path: '/category/healthcare',
            name: 'healthcare',
            component: Healthcare
        },
        {
            path: '/category/healthcare/doctors',
            name: 'doctors',
            component: Doctors
        },
        {
            path: '/category/healthcare/hospitals',
            name: 'hospitals',
            component: Hospitals
        },
        {
            path: '/category/healthcare/pharmacies',
            name: 'pharmacies',
            component: Pharmacies
        },
        {
            path: '/category/healthcare/psychologists',
            name: 'psychologists',
            component: Psychologists
        },
        
        

        {
            path: '/category/museums',
            name: 'museums',
            component: Museums
        },
        {
            path: '/category/museums/arts',
            name: 'arts',
            component: Arts
        },
        {
            path: '/category/museums/city-tours',
            name: 'city-tours',
            component: CityTours
        },
        {
            path: '/category/museums/history',
            name: 'history',
            component: History
        },
        {
            path: '/category/museums/science',
            name: 'science',
            component: Science
        },



        {
            path: '/category/sports',
            name: 'sports',
            component: Sports
        },
        {
            path: '/category/sports/basketball-courts',
            name: 'basketball-courts',
            component: BasketballCourts
        },
        {
            path: '/category/sports/football-courts',
            name: 'football-courts',
            component: FootballCourts
        },
        {
            path: '/category/sports/gyms',
            name: 'gyms',
            component: Gyms
        },
        {
            path: '/category/sports/running-tracks',
            name: 'running-tracks',
            component: RunningTracks
        },
        {
            path: '/category/sports/swimming-pools',
            name: 'swimming-pools',
            component: SwimmingPools
        },
        {
            path: '/category/sports/yoga-studios',
            name: 'yoga-studios',
            component: YogaStudios
        }
    ]
});