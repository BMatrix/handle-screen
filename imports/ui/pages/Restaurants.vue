<template>
  <div>
    <div class="item" v-for="result in response.results" :key="result.id">
      <div class="image">
        <img :src="result.icon" alt />
      </div>
      <div class="name">
        <p>{{ result.name }}</p>
      </div>
      <div class="rating">
        <p>Rating: {{ result.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Convert, IResponse } from "../../api/IResponse.ts";
import json from "../../api/PlaceholderResponse.json";
export default {
  created() {
    this.response = Convert.toIResponse(JSON.stringify(json));
  }
};
</script>

<style scoped>
.item {
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