// Import client startup through a single index entry point

import Vue from 'vue';
import router from './router.js';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import App from '../../../client/App.vue';
import '../../../client/main.html';

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
        router: router
    });
});