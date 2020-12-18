import React from 'react';
import { connect } from 'react-redux';
import like from '../../images/like.png';

import './FavoritesList.css';

function FavoritesList({ favorites }) {
  return (
    <div className="container">
      <div className="characters">
        {favorites
          && favorites.map((character) => (
            <div className="card" key={character.name}>
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
              </div>
              <div className="favorite">
                <img className="like" src={like} alt="like foto" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function mapStateToPops(state) {
  return {
    favorites: state.charactersReducer.favorites,
  };
}
export default connect(mapStateToPops)(FavoritesList);
