// Import client startup through a single index entry point

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);
Vue.use(VueRouter);


import Dashboard from '../../ui/pages/Dashboard';
import Language from '../../ui/pages/Language';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/language', component: Language }
];

const router = new VueRouter({
    routes,
    mode: "history"
});


import App from '../../../client/App.vue';
import '../../../client/main.html';

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
        router: router
    });
});