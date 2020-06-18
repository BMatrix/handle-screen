<template>
  <List :items="yogaStudios"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { YogaStudios } from "../../../api/sports/Sports";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.yogastudios.all");

export default {
  components: {
    List
  },
  data() {
    return {
      yogaStudios: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.yogaStudios = YogaStudios.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>