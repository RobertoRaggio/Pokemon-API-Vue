export const pokemon_api = 'https://pokeapi.co/api/v2/';
export const getPokemonName = PokemonValueName => `pokemon/${PokemonValueName}`;

export const PokemonDetails = async (PokemonValueName) => {
    return await fetch(`${pokemon_api}${getPokemonName(PokemonValueName.toLowerCase())}`)
        .then(response => response.json())
        .then(responseJson => {
            return pokemonResource(responseJson);
        })
        .catch(error => {
            console.error({ error });
        })
}

export const pokemonResource = bodyResponsePokemon => {
    return {
        abilities: bodyResponsePokemon.abilities,
        moves: bodyResponsePokemon.moves,
        imagen: bodyResponsePokemon.sprites.front_default,
    }
}