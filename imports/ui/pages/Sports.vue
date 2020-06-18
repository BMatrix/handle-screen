<template>
  <div>
    <Column :width="'80%'" :height="'600px'" :gap="'15px'">
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'basketball-courts'"
        >Baketball Fields</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :red="true"
          :routename="'football-courts'"
        >Football Fields</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :red="true"
          :routename="'gyms'"
        >Gyms</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'running-tracks'"
        >Running Tracks</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'swimming-pools'"
        >Swimming Pools</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'yoga-studios'"
        >Yoga Studios</IconTile>
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