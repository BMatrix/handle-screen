<template>
  <BaseTile :red="red" :image="image" :routename="routename">
    <div class="all">
      <h2>{{ title }}</h2>
      <center>
        <button>
          <slot></slot>
        </button>
      </center>
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
    title: String
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
  color: white;
  font-family: Arial;
  font-size: 12pt;
  text-align: center;
}
button {
  color: white;
  background-color: transparent;
  text-align: center;
  font-family: Arial;
  font-size: 9pt;
  padding: 5px 10px 5px 10px;
  border: solid white 3px;
}
button:active,
button:hover {
  font-size: 8pt;
  margin-top: 2px;
  padding: 3px 7px 3px 7px;
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
