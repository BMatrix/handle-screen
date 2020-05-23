<template>
  <List :items="supermarkets"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Supermarkets } from "../../../api/fooddrinks/FoodDrinks";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("fooddrinks.supermarkets.all");

export default {
  components: {
    List
  },
  data() {
    return {
      supermarkets: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.supermarkets = Supermarkets.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>