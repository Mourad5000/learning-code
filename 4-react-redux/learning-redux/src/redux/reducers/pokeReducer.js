import actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      //aqui cambia el estado
      const coso = {
        ...state,
        pokemonList: action.pokemonList,
      };
      return coso;
    case actionTypes.LOAD_POKEMONS_ERROR:
      break;
    case "RANDOM":
      debugger;
      const cosoRandom = {
        ...state,
        randomNumber: [action.randomNumber],
      };
      return cosoRandom;
    case actionTypes.CREATE_POKEMON:
      const miStado = { ...state, pokemon: action.pokemon };
      return miStado;
    default:
      return state;
  }
}
