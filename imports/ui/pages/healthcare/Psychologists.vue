<template>
  <List :items="psychologists"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Psychologists } from "../../../api/healthcare/Healthcare";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("healthcare.psychologists.all");

export default {
  components: {
    List
  },
  data() {
    return {
      psychologists: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.psychologists = Psychologists.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>