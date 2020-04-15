<template>
  <div class="center" :style="columnwidth">
    <div class="column" :style="[columnheight, columnstyle]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    width: String,
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
    columnstyle() {
      return {
        "grid-template-rows": "repeat(" + this.items + ", auto)",
        "row-gap": this.gap
      };
    },
    columnwidth() {
      return {
        width: this.width
      };
    },
    columnheight() {
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
.column {
  display: grid;
  grid-template-columns: 1fr;
}
</style>