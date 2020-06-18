<template>
  <div>
    <div v-if="type == ListType.Places">
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

    <div v-if="type == ListType.Antwerp">
      <div class="item" v-for="item in items" :key="item.attributes.gisid">
        <div class="name">
          <p>{{ item.attributes.naam }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import recursivelyLowercaseJSONKeys from "recursive-lowercase-json";

export enum ListType {
  Places,
  Antwerp
}

export default {
  name: "List",
  props: {
    items: Array,
    type: {
      type: Number,
      default: ListType.Places
    }
  },
  data() {
    return {
      ListType
    };
  },
  created() {
    this.items = recursivelyLowercaseJSONKeys(this.items);
    console.log(this.items);
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