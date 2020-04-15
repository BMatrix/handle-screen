<template>
  <div class="row" :style="[rowstyle, rowheight]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    height: String,
    gap: String
  },
  computed: {
    items() {
      return (
        this.$slots.default.length -
        (Math.round(this.$slots.default.length / 2) - 1)
      );
    },
    rowstyle() {
      return {
        "grid-template-columns": `repeat(${this.items}, 1fr)`,
        "column-gap": this.gap
      };
    },
    rowheight() {
      return {
        height: this.height
      };
    }
  }
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
.row {
  display: grid;
  /*grid-template-rows: 1fr;*/
}
</style>    