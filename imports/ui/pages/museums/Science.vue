<template>
  <List :items="science"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Science } from "../../../api/museums/Museums";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("museums.science.all");

export default {
  components: {
    List
  },
  data() {
    return {
      science: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.science = Science.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>