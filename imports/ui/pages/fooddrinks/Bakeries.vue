<template>
  <List :items="bakeries"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Bakeries } from "../../../api/fooddrinks/FoodDrinks";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("fooddrinks.bakeries.all");

export default {
  components: {
    List
  },
  data() {
    return {
      bakeries: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.bakeries = Bakeries.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>