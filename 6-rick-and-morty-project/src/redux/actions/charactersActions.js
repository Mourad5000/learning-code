/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import axios from 'axios';
import actionTypes from './actionTypes';

export function requestCharactersSucces(charactersList) {
  return {
    type: actionTypes.LOAD_CHARACTERS,
    charactersList,
  };
}

function requestCharactersError(error) {
  return {
    type: actionTypes.LOAD_CHARACTERS_ERROR,
    error,
  };
}

export function requestCharacters() {
  return async (dispatch) => {
    let generatedCharacterList = [];
    try {
      for (let i = 1; i <= 100; i++) {
        const endPoint = `https://rickandmortyapi.com/api/character/${i}`;
        const { data } = await axios.get(endPoint);
        const myCharacter = { ...data, isFavorite: false };
        generatedCharacterList = [...generatedCharacterList, myCharacter];
      }
      
      dispatch(requestCharactersSucces(generatedCharacterList));
    } catch (error) {
      dispatch(requestCharactersError(error));
    }
  };
}

export function ChechIfIsFavorite(newCharacterClick) {
  newCharacterClick.isFavorite = !newCharacterClick.isFavorite;
  // per ser 100% redux aquesta logica hauria d'estar al compo
  if (newCharacterClick.isFavorite) {
    return {
      type: actionTypes.ADD_TO_FAVORITES,
      newCharacterClick,
    };
  }
  return {
    type: actionTypes.ELIMINATE_FAVORITE,
    newCharacterClick,
  };
}

export function searchCharacter(search, characters) {
  const filteredCharacters = characters.filter((character) => {
    const filterName = character.name.toLowerCase().includes(search);
    const filterSpecies = character.species.toLowerCase().includes(search);
    const filterPlanet = character.origin.name.toLowerCase().includes(search);
    return filterName || filterSpecies || filterPlanet;
  });
  return {
    type: actionTypes.SEARCH_CHARACTERS,
    filteredCharacters,
  };
}
