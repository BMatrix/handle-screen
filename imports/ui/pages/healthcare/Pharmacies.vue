<template>
  <List :items="pharmacies"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Pharmacies } from "../../../api/healthcare/Healthcare";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("healthcare.pharmacies.all");

export default {
  components: {
    List
  },
  data() {
    return {
      pharmacies: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.pharmacies = Pharmacies.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>