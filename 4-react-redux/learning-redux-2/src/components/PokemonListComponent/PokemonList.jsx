import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  incrementPokemonCount,
  loadPokemons,
} from "../../redux/actions/pokeActions";

function PokemonList({ pokemonList, pokemonCount, dispatch, actions }) {
  debugger;
  if (!pokemonList && !pokemonList?.length) {
    debugger;
    dispatch(loadPokemons());
  }
  return (
    <>
      <h1>Pokemon Count: {pokemonCount}</h1>

      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          // Primer pas: cridar al action creator
          actions.incrementPokemonCount();
        }}
      >
        Increment Pokemon Counter
      </button>

      <ul>
        {pokemonList &&
          pokemonList.length &&
          pokemonList.map((currentPokemon) => {
            return <li>{currentPokemon.name}</li>;
          })}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  debugger;
  // 5e pas: Reb el nou state i prepara la info que rebrà el compo per props
  return {
    pokemonList: state.pokeReducer.pokemonList,
    pokemonCount: state.pokeReducer.pokemonCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ incrementPokemonCount }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
