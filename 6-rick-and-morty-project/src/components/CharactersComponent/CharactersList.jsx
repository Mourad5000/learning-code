/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import {
  requestCharacters,
  ChechIfIsFavorite,
} from '../../redux/actions/charactersActions';
import { Link } from 'react-router-dom';

import './CharactersList.css';

import like from '../../images/like.png';
import noLike from '../../images/noLike.png';
import notFound from '../../images/notFound.png';

function CharactersList({ dispatch, searchResult, favorites, loading }) {
  if (!searchResult && !searchResult?.length) {
    dispatch(requestCharacters());
  }

  return (
    <div className="container">
      {loading ? (
        <div>
          <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40"></a></p>
        </div>
          ):(
            <div className="characters">
        {searchResult
          && searchResult.length
          && searchResult.map((character) => (
            <Link className="card" key={character.name} to={`${character.id}`}>
              <div className="img-container">
                <img
                  className="image"
                  src={character.image}
                  alt="Character"
                  />
              </div>
              <div className="info">
                <span className="name">{character.id}</span>
                <h3>{character.name}</h3>
                <small>
                  Hey! I am
                  {' '}
                  {character.species}
                  {' '}
                  and I am
                  {' '}
                  {character.status}
                </small>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(ChechIfIsFavorite(character, favorites));
                }}
                >
                {character.isFavorite ? (
                  <img className="like" src={like} alt="" />
                ) : (
                  <img className="like" src={noLike} alt="" />
                )}
              </div>
            </Link>
          ))}
          {!searchResult?.length && (
          <div className="error">
            <h1>Lo que buscas no existe en la galaxia de Rick i Morty!!</h1> 
            <img src={notFound} className="image-notFound"></img>
            </div>)}
      </div>
          )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    charactersList: state.charactersReducer.charactersList,
    favorites: state.charactersReducer.favorites,
    searchResult: state.charactersReducer.searchResult,
    loading: state.charactersReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ addToFavorites }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
