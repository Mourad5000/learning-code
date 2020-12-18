import actionTypes from "../actions/actionTypes";

export default function pokeReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      //return la funcionalidad que sea
      debugger;
      const coso = { ...state, pokemonList: action.pokemonList };
      return coso;
    case actionTypes.LOAD_POKEMONS_ERROR:
      debugger;
      break;
    default:
      //si no entra en ninguna de las actions devuelveme el state tal y como estaba antes
      return state;
  }
}
