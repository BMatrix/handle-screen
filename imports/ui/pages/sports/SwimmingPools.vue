<template>
  <List :items="swimmingPools" :type="type"></List>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { SwimmingPools } from "../../../api/sports/Sports";
import List, { ListType } from "../../components/List.vue";
let subscription = Meteor.subscribe("sports.swimmingpools.all");

export default {
  components: {
    List
  },
  data() {
    return {
      swimmingPools: [],
      type: ListType.Antwerp
    };
  },
  created() {
    if (subscription.ready()) {
      this.swimmingPools = SwimmingPools.find().fetch();
    }
  }
};
</script>

<style scoped>
</style>