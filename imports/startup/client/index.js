// Import client startup through a single index entry point

import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!

import App from '../../../client/App.vue';
import '../../../client/main.html';

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
    });
});