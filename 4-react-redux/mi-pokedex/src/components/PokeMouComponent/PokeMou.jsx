import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PokeApiRequest } from "../../redux/actions/pokeActions";

import "./PokeMou.css";
import { waitForDomChange } from "@testing-library/react";

function PokeMou({ pokemon, dispatch }) {
  if (!pokemon && !pokemon?.length) {
    debugger;
    dispatch(PokeApiRequest());
  }

  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

  function searchColor(type) {
    const theColor = colors[type];
    return theColor;
  }

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  return (
    <div className="container">
      <h1>Mi PokeDex</h1>
      <div className="pokemons">
        {pokemon &&
          pokemon.map((pokemon, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{
                  background: searchColor(pokemon.types[0].type.name),
                }}
              >
                <div className="img-container">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="info">
                  <span className="name">#{pokemon.id}</span>
                  <h3>{capitalize(pokemon.name)}</h3>
                  <small>Type: {pokemon.types[0].type.name}</small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  debugger;
  return {
    pokemon: state.pokeReducer.pokemon,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeMou);
