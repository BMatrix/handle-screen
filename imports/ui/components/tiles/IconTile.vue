<template>
  <BaseTile :red="red" :image="image" :routename="routename">
    <div class="all">
      <center v-if="icon != null" class="center">
        <img :src="icon" alt />
      </center>
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
center {
  position: absolute;
  height: 100%;
  width: 100%;
}
img {
  position: relative;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
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
