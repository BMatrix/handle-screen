<template>
  <List :items="cityTours"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { CityTours } from "../../../api/museums/Museums";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("museums.citytours.all");

export default {
  components: {
    List
  },
  data() {
    return {
      cityTours: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.cityTours = CityTours.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>