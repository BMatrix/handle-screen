<template>
  <div>
    <div class="item" v-for="item in items" :key="item.id">
      <div class="image">
        <img :src="item.icon" alt />
      </div>
      <div class="name">
        <p>{{ item.name }}</p>
      </div>
      <div class="rating">
        <p v-if="item.rating">Rating: {{ item.rating }}</p>
        <p v-if="!item.rating">No rating available</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "List",
  props: {
    items: Array
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