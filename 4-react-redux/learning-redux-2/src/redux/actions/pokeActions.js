import actionTypes from "./actionTypes";
import axios from "axios";
import { act } from "react-dom/test-utils";

export function incrementPokemonCount() {
    // Segon pas: Preparem dades, creem la action i la pasa al reducer
    return {
        type: actionTypes.INCREMENT_POKEMON_COUNT,
    };
}

function loadPokemonsSuccess(actionPokemonList) {
    return {
        type: actionTypes.LOAD_POKEMONS,
        actionPokemonList,
    };
}

function loadPokemonsError(actionError) {
    return {
        type: actionTypes.LOAD_POKEMONS_ERROR,
        actionError,
    };
}

export function loadPokemons() {
    return async (dispatch) => {
        const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
        try {
            const pokemonList = await axios(endpoint);
            dispatch(loadPokemonsSuccess(pokemonList.data.results));
        } catch (error) {
            dispatch(loadPokemonsError(error));
        }
    };
}

export function loadPokemonsPromises() {
    return (dispatch) => {
        const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
        axios(endpoint)
            .then((pokemonListResponse) => {
                debugger;
                dispatch(loadPokemonsSuccess(pokemonListResponse.data.results));
            })
            .catch((error) => {
                debugger;
                dispatch(loadPokemonsError(error));
            });
    };
}
