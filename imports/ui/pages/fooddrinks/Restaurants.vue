<template>
  <List :items="restaurants"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Restaurants } from "../../../api/fooddrinks/restaurants/Restaurants";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("fooddrinks.restaurants.all");

export default {
  components: {
    List
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.restaurants = Restaurants.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>