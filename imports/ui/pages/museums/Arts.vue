<template>
  <List :items="arts"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Arts } from "../../../api/museums/Museums";
import List from "../../components/List.vue";
let subscription = Meteor.subscribe("museums.arts.all");

export default {
  components: {
    List
  },
  data() {
    return {
      arts: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.arts = Arts.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>