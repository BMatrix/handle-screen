<template>
  <List :items="gyms"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Gyms } from "../../../api/sports/Sports";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.gyms.all");

export default {
  components: {
    List
  },
  data() {
    return {
      gyms: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.gyms = Gyms.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>