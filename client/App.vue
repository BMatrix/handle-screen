<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../imports/ui/components/NavBar";
import Dashboard from "../imports/ui/pages/Dashboard";

export default {
  Dashboard,
  components: {
    NavBar
  }
};
</script>

<style scoped>
</style>