<template>
  <BaseTile :red="red" :image="image" :routename="routename">
    <div class="all">
      <h2>{{ title }}</h2>
      <p class="text">
        <slot></slot>
      </p>
    </div>
  </BaseTile>
</template>

<script>
import BaseTile from "./BaseTile.vue";
export default {
  components: {
    BaseTile
  },
  props: {
    red: {
      type: Boolean,
      default: false
    },
    image: String,
    routename: {
      type: String,
      default: "dashboard"
    },
    title: String,
    icon: String
  }
};
</script>

<style scoped>
.all {
  position: relative;
  width: auto;
  height: 100%;
  display: block;
}
h2 {
  position: absolute;
  margin: 10px 7px 0px 7px;
  color: white;
  font-family: Arial;
  font-size: 10pt;
}
.text {
  position: absolute;
  margin: 0px 7px 7px 7px;
  bottom: 0px;
  color: white;
  font-family: Arial;
  font-size: 6pt;
}
</style>
853742691