<template>
  <List :items="doctors"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Doctors } from "../../../api/healthcare/Healthcare";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("healthcare.doctors.all");

export default {
  components: {
    List
  },
  data() {
    return {
      doctors: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.doctors = Doctors.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>