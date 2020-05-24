<template>
  <List :items="history"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { History } from "../../../api/museums/Museums";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("museums.history.all");

export default {
  components: {
    List
  },
  data() {
    return {
      history: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.history = History.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>