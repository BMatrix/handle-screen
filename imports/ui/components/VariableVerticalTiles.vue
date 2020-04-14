<template>
  <div class="grid">
    <!--Column 1-->
    <Tile class="Tile1" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <Tile class="Tile2" :icon="'assets/Placeholder.png'" :red="true">Lorem Ipsum</Tile>
    <Tile class="Tile3" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <!--Column 2-->
    <Tile class="Tile4" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <Tile class="Tile5" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <Tile class="Tile6" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <!--Column 3-->
    <Tile class="Tile7" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <Tile class="Tile8" :icon="'assets/Placeholder.png'" :red="true">Lorem Ipsum</Tile>
    <Tile class="Tile9" :icon="'assets/Placeholder.png'">Lorem Ipsum</Tile>
    <!--Bottom Row-->
    <Tile
      class="Tile10"
      :title="'Lorem Ipsum'"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, tortor a faucibus faucibus.</Tile>
    <Tile
      class="Tile11"
      :title="'Lorem Ipsum'"
      :red="true"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, tortor a faucibus faucibus.</Tile>
    <Tile class="Tile12" :centertitle="'Lorem Ipsum'" :button="true">Lorem Ipsum</Tile>
  </div>
</template>

<script>
import Tile from "../components/Tile.vue";
export default {
  components: {
    Tile
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
  grid-column-gap: 20px;
  grid-row-gap: 10px;
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