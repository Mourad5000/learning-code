import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  requestPokemons,
  createRandomVariable,
} from "../../redux/actions/pokeActions";

function PokemonList({ pokemonList, randomNumber, dispatch, actions }) {
  if (!pokemonList && !pokemonList?.length) {
    dispatch(requestPokemons());
  }
  return (
    <div className="lista">
      {pokemonList &&
        pokemonList.length &&
        pokemonList.map((pokemon) => {
          return <p>{pokemon.name}</p>;
        })}
      <button
        onClick={(event) => {
          //handleClick(character);
          event.preventDefault();
          actions.createRandomVariable();
        }}
      >
        Generate a Random Number
      </button>
      <p>{randomNumber}</p>
    </div>
  );
}

//en este van las actions asincronas
function mapStateToProps(state) {
  //aqui estan todos los datos de la app. Retorna lo que nosotros queramos usar
  return {
    pokemonList: state.pokeReducer.pokemonList,
    randomNumber: state.pokeReducer.randomNumber,
  };
}

//en este van las actions sincronas
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    //{alli van todos los actions que quieren que haga}
    actions: bindActionCreators({ createRandomVariable }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
