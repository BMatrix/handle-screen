<template>
  <div class="black" :class="{'red':red}">
    <h2 v-if="title != null">{{ title }}</h2>
    <h3 v-if="centertitle != null">{{ centertitle }}</h3>
    <center v-if="button">
      <button>
        <slot></slot>
      </button>
    </center>
    <div v-if="icon != null" class="icon">
      <img class="icon" :src="icon" alt />
    </div>
    <div v-if="!button" class="bottom">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    red: {
      type: Boolean,
      default: false
    },
    title: String,
    icon: String,
    centertitle: String,
    button: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.black {
  position: relative;
  background-color: #181818;
  transition: all 0.1s ease-in;
}
.black:active,
.black:hover {
  background-color: #313131;
}
.red {
  background-color: #f61f28;
}
.red:active,
.red:hover {
  background-color: #f15860;
}

h2 {
  margin: 8px;
  color: white;
  font-family: Arial;
  font-size: 10pt;
}
h3 {
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
button:active {
  font-size: 8pt;
  margin-top: 2px;
  padding: 3px 7px 3px 7px;
}

.bottom {
  position: absolute;
  bottom: 0px;
}
p {
  color: white;
  font-family: Arial;
  font-size: 6pt;
  margin: 7px;
}

.background {
  width: 10px;
  height: 10px;
}

.icon {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: white;
}
</style>