<template>
  <div class="grid">
    <!--Column 1-->
    <IconTile class="Tile1" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <IconTile
      class="Tile2"
      :icon="'assets/placeholder-icon.png'"
      :routename="'food-drinks'"
      :red="true"
    >Food & Drinks</IconTile>
    <IconTile class="Tile3" :icon="'assets/placeholder-icon.png'" :routename="'museums'">Museums</IconTile>
    <!--Column 2-->
    <IconTile class="Tile4" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <IconTile class="Tile5" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <IconTile class="Tile6" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <!--Column 3-->
    <IconTile class="Tile7" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <IconTile
      class="Tile8"
      :icon="'assets/placeholder-icon.png'"
      :red="true"
      :routename="'healthcare'"
    >Healthcare</IconTile>
    <IconTile class="Tile9" :icon="'assets/placeholder-icon.png'">Lorem Ipsum</IconTile>
    <!--Bottom Row-->
    <TextTile
      class="Tile10"
      :title="'Lorem Ipsum'"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, tortor a faucibus faucibus.</TextTile>
    <TextTile
      class="Tile11"
      :title="'Lorem Ipsum'"
      :red="true"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, tortor a faucibus faucibus.</TextTile>
    <ButtonTile class="Tile12" :title="'Lorem Ipsum'" :routename="'food-drinks'">Lorem Ipsum</ButtonTile>
  </div>
</template>

<script>
import IconTile from "../components/tiles/IconTile.vue";
import TextTile from "../components/tiles/TextTile.vue";
import ButtonTile from "../components/tiles/ButtonTile.vue";
export default {
  components: {
    IconTile,
    TextTile,
    ButtonTile
  }
};
</script>

<style scoped>
.grid {
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 31%);
  grid-template-rows: repeat(17, 30px);
  column-gap: 20px;
  row-gap: 10px;
  background-color: transparent;
}

.Tile1 {
  grid-area: 1 / 1 / 5 / 2;
}
.Tile2 {
  grid-area: 5 / 1 / 11 / 2;
}
.Tile3 {
  grid-area: 11 / 1 / 15 / 2;
}
.Tile4 {
  grid-area: 1 / 2 / 6 / 3;
}
.Tile5 {
  grid-area: 6 / 2 / 8 / 3;
}
.Tile6 {
  grid-area: 8 / 2 / 15 / 3;
}
.Tile7 {
  grid-area: 1 / 3 / 3 / 4;
}
.Tile8 {
  grid-area: 3 / 3 / 9 / 4;
}
.Tile9 {
  grid-area: 9 / 3 / 15 / 4;
}
.Tile10 {
  grid-area: 15 / 1 / 18 / 2;
}
.Tile11 {
  grid-area: 15 / 2 / 18 / 3;
}
.Tile12 {
  grid-area: 15 / 3 / 18 / 4;
}
</style>