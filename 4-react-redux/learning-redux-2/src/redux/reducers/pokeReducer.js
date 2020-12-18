import actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = {}, action) {
  // 3r pas: El reducer analitza el action.type i guarda la info al state i retorna el nou state
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return { ...state, pokemonList: action.actionPokemonList };

    case actionTypes.LOAD_POKEMONS_ERROR:
      return { ...state, stateError: action.actionError };

    case actionTypes.INCREMENT_POKEMON_COUNT:
      // Incrementar el contador que tenim al state
      const newValue = ++state.pokemonCount;
      const newState = { ...state, pokemonCount: newValue };
      // 4t pas: Retornem el nou state i salta al compo (mapDispatchToProps)
      return newState;
    default:
      return state;
  }
}
