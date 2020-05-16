<template>
  <div>
    <div class="item" v-for="result in bars" :key="result.id">
      <div class="image">
        <img :src="result.icon" alt />
      </div>
      <div class="name">
        <p>{{ result.name }}</p>
      </div>
      <div class="rating">
        <p v-if="result.rating" >Rating: {{ result.rating }}</p>
        <p v-if="!result.rating" >No rating available</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Meteor } from "meteor/meteor";
import { Bars } from "../../../api/fooddrinks/bars/Bars";
let subscription = Meteor.subscribe("fooddrinks.bars.all");

export default {
  data() {
    return {
      bars: []
    };
  },
  created() {
    if (subscription.ready()) {
      this.bars = Bars.find().fetch();
    } else {
    }
  }
};
</script>

<style scoped>
.item {
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  background-color: lightgray;
}
.item div {
  padding: 1%;
}
.image {
  flex-basis: 30%;
}
.name {
  flex-basis: 50%;
}
.rating {
  flex-basis: 20%;
  text-align: right;
}
</style>