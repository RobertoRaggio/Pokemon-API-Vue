<template>
  <div id="app">
    <img class="pokelogo" src="@/assets/pokelogo.jpg" alt="pokelogo" />
    <form>
      <label for="txt_name">Name: </label>
      <input type="text" name="txt_name" id="txt_name" v-model="namePokemon" />
      <button type="submit" @click.prevent="searchPokemon">Search</button>
    </form>
    <PokeDetails :detallePokemon="detallePokemon" />
  </div>
</template>

<script>
import PokeDetails from "./components/PokemonDetails";
import { PokemonDetails } from "./api/ApiPokemon";
export default {
  name: "App",
  components: {
    PokeDetails,
  },
  data() {
    return {
      namePokemon: "",
      detallePokemon: {},
    };
  },
  methods: {
    async searchPokemon() {
      const { namePokemon } = this;
      this.detallePokemon = await PokemonDetails(namePokemon);
    },
  },
  async created() {
    this.detallePokemon = await PokemonDetails("pikachu");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pokelogo {
  width: 50%;
  height: 50%;
  margin-left: auto;

}
</style>