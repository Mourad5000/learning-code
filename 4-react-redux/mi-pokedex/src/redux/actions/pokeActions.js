import actionTypes from "./actionTypes";
import axios from "axios";

function requestPokemonsSucces(pokemonList) {
  return {
    type: actionTypes.LOAD_POKEMONS,
    pokemonList,
  };
}

function requestPokemonsError(error) {
  return {
    type: actionTypes.LOAD_POKEMONS_ERROR,
    error,
  };
}

export function requestPokemons() {
  return async (disaptch) => {
    const endPoint = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    try {
      const pokemons = await axios(endPoint);
      //Dispatchamos una accion sincrona de succes
      disaptch(requestPokemonsSucces(pokemons.data.results)); //el nombre de los pokemons se encuentra en esta ruta del objeto
    } catch (error) {
      //Dispatchamos una accion sincrona de error
      disaptch(requestPokemonsError(error));
    }
  };
}

export function createRandomVariable() {
  const randomNumber = Math.random();
  return {
    type: "RANDOM",
    randomNumber,
  };
}

//--------------------SE ACABO EL EJEMPLO---------------------------------------------

function PokeApiRequestSucces(pokemon) {
  return {
    type: actionTypes.CREATE_POKEMON,
    pokemon,
  };
}

export function PokeApiRequest() {
  return async (disaptch) => {
    let generatedPokemonList = [];
    for (let i = 1; i <= 150; i++) {
      let endPoint = `https://pokeapi.co/api/v2/pokemon/${i}`;
      let pokemon = await axios(endPoint);
      generatedPokemonList.push(pokemon.data);
    }
    disaptch(PokeApiRequestSucces(generatedPokemonList));
  };
}
