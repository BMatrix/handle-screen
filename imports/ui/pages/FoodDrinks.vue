<template>
  <div>
    <Column :width="'80%'" :height="'600px'" :gap="'15px'">
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'restaurants'"
        >Restaurants</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :red="true"
        >Lorem Ipsum</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :red="true"
        >Lorem Ipsum</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
        >Lorem Ipsum</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
        >Lorem Ipsum</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
        >Lorem Ipsum</IconTile>
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