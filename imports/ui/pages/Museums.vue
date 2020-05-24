<template>
  <div>
    <Column :width="'80%'" :height="'600px'" :gap="'15px'">
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'arts'"
          :red="true"
        >Arts</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'history'"
        >History</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'science'"
        >Science</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'city-tours'"
        >City Tours</IconTile>
      </Row>
    </Column>
  </div>
</template>

<script>
import IconTile from "../components/tiles/IconTile.vue";

export default {
  components: {
    IconTile
  }
};
</script>

<style scoped>
</style>