<template>
  <div>
    <Column :width="'80%'" :height="'600px'" :gap="'15px'">
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :red="true"
          :routename="'doctors'"
        >Doctors</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'hospitals'"
        >Hospitals</IconTile>
      </Row>
      <Row :height="'100%'" :gap="'10px'">
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'pharmacies'"
        >Pharmacies</IconTile>
        <IconTile
          :image="'../assets/placeholder-background.jpg'"
          icon="../assets/placeholder-icon.png"
          :routename="'psychologists'"
        >Psychologists</IconTile>
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