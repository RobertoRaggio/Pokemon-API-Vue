<template>
  <div class="containerPokemon">
    <img :src="detallePokemon.imagen" alt="imagen pokemon" />
    <h1>Moves</h1>
    <section class="container-movimientos">
      <div v-for="(moves, index) in detallePokemon.moves" :key="index">
        <p>{{ moves.move.name }}</p>
      </div>
    </section>
  <h1>Abilites</h1>
    <section class="container-habilidades">
      <div v-for="(abilities, index) in detallePokemon.abilities" :key="index">
        <p>{{ abilities.ability.name }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "PokeDetails",
  props: {
    detallePokemon: {},
  },
};
</script>
<style scoped>
.containerPokemon {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  height: 15rem;
  width: 15rem;
  object-fit: cover;
}
.container-habilidades {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
}
p {
  margin: 0.3rem;
  padding: 0.3rem;
  background-color:yellow;
  color: black;
  font-weight: 600;
  text-align: center;
}
.container-movimientos {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;
}
</style>