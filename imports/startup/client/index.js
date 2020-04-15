import Vue from 'vue';
import router from './router.js';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);


//Global Components
import Row from "../../ui/components/global/Row.vue";
import Column from "../../ui/components/global/Column.vue";
Vue.component('Row', Row);
Vue.component('Column', Column);


import App from '../../../client/App.vue';
import '../../../client/main.html';

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
        router: router
    });
});