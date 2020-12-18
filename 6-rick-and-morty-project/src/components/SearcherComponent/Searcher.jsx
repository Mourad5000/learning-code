import React from 'react';
import { connect } from 'react-redux';
import { searchCharacter } from '../../redux/actions/charactersActions';
import './Searcher.css';

function Searcher({ charactersList, dispatch }) {
  return (
    <section className="welcomer-container">
      <div className="welcomer-content">
        <div className="text">
          <h2>Bienvenidos.</h2>
          <h3>Busca lo que quieras del universo de Ricky and Morty</h3>
        </div>
        <div className="search">
          <form action="/search" className="theSearcher">
            <label htmlFor="search" className="theSearcher">
              <input
                type="text"
                name="search"
                autoComplete="off"
                autofill="off"
                placeholder="Busca un personaje, universo, vivos, muertos...lo que más ilu te haga"
                onChange={(event) => {
                  event.preventDefault();
                  if (event.target.value.length >= 2) {
                    dispatch(
                      searchCharacter(
                        event.target.value.toLowerCase(),
                        charactersList,
                      ),
                    );
                  }
                }}
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    searchResult: state.charactersReducer.searchResult,
    charactersList: state.charactersReducer.charactersList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
