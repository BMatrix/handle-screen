<template>
  <List :items="basketballCourts" :type="type"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { BasketballCourts } from "../../../api/sports/Sports";
import List, { ListType } from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.basketballcourts.all");

export default {
  components: {
    List
  },
  data() {
    return {
      basketballCourts: [],
      type: ListType.Antwerp
    };
  },
  created() {
    if (subscription.ready()) {
      this.basketballCourts = BasketballCourts.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>