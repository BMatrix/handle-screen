<template>
  <List :items="hospitals"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Hospitals } from "../../../api/healthcare/Healthcare";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("healthcare.hospitals.all");

export default {
  components: {
    List
  },
  data() {
    return {
      hospitals: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.hospitals = Hospitals.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>