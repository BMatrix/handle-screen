<template>
  <List :items="bars"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Bars } from "../../../api/fooddrinks/FoodDrinks";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("fooddrinks.bars.all");

export default {
  components: {
    List
  },
  data() {
    return {
      bars: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.bars = Bars.find().fetch();
    } else {
    }
  }
};
</script>

<style scoped>
</style>