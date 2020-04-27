<template>
  <div>
    <router-link :to="{ name: 'dashboard' }">
      <img id="logo" src="assets/placeholder-logo.png" alt="logo" />
    </router-link>
    <router-link :to="{ name: 'language' }">
      <img id="logo" src="assets/placeholder-language-icon.png" alt="language" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  height: 70px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#logo {
  height: 35px;
}
</style>