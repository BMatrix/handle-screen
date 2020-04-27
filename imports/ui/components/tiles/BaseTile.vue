<template>
  <!--
    class:
      if(red){
        if (image) { redt }
        else { red }
      }
      else{
        if (image) { blackt }
        else { black }
      }
  -->
  <div
    :class="['base', red ? image != null ? 'redt' : 'red' : image != null? 'blackt' : 'black']"
    :style="backgroundimage"
  >
    <router-link :style="routerstyle" :to="{ name: routename }">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    red: {
      type: Boolean,
      default: false
    },
    image: String,
    routename: {
      type: String,
      default: "dashboard"
    }
  },
  computed: {
    backgroundimage() {
      return {
        "background-image": "url(" + this.image + ")"
      };
    },
    routerstyle() {
      return {
        width: "auto",
        height: "100%",
        display: "block"
      };
    }
  }
};
</script>

<style scoped>
.base {
  transition: all 0.1s ease-in;
  background-blend-mode: multiply;
}
.black {
  background-color: #171717;
}
.black:active,
.black:hover {
  background-color: #313131;
}
.blackt {
  background-color: #17171780;
}
.blackt:active,
.blackt:hover {
  background-color: #1717174d;
}
.red {
  background-color: #f61f28;
}
.red:active,
.red:hover {
  background-color: #f15860;
}
.redt {
  background-color: #f61f2880;
}
.redt:active,
.redt:hover {
  background-color: #f61f284d;
}
</style>