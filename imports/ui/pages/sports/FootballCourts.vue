<template>
  <List :items="footballCourts" :type="type"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { FootballCourts } from "../../../api/sports/Sports";
import List, { ListType } from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.footballcourts.all");

export default {
  components: {
    List
  },
  data() {
    return {
      footballCourts: [],
      type: ListType.Antwerp
    };
  },
  created() {
    if (subscription.ready()) {
      this.footballCourts = FootballCourts.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>