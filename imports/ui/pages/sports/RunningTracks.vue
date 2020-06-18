<template>
  <List :items="runningTracks" :type="type"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { RunningTracks } from "../../../api/sports/Sports";
import List, { ListType } from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.runningtracks.all");

export default {
  components: {
    List
  },
  data() {
    return {
      runningTracks: [],
      type: ListType.Antwerp
    };
  },
  created() {
    if (subscription.ready()) {
      this.runningTracks = RunningTracks.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>