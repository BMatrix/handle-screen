<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../imports/ui/components/NavBar.vue";
import Dashboard from "../imports/ui/pages/Dashboard.vue";

export default {
  Dashboard,
  components: {
    NavBar
  }
};
</script>

<style scoped>
</style>