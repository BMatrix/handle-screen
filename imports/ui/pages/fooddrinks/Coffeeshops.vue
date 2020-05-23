<template>
  <List :items="coffeeshops"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Coffeeshops } from "../../../api/fooddrinks/FoodDrinks";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("fooddrinks.coffeeshops.all");

export default {
  components: {
    List
  },
  data() {
    return {
      coffeeshops: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.coffeeshops = Coffeeshops.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>