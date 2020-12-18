import actionTypes from '../actions/actionTypes';

export default function charactersReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      newState = {
        ...state,
        charactersList: action.charactersList,
        searchResult: action.charactersList,
        loading:false
      };
      break;

    case actionTypes.LOAD_CHARACTERS_ERROR:
      break;

    case actionTypes.ADD_TO_FAVORITES:
      newState = {
        ...state,
        favorites: [...state.favorites, action.newCharacterClick],
      };
      break;

    case actionTypes.ELIMINATE_FAVORITE:
      newState = {
        ...state,
        favorites: state.favorites.filter(
          (items) => items.id !== action.newCharacterClick.id,
        ),
      };
      break;

    case actionTypes.SEARCH_CHARACTERS:
      newState = {
        ...state,
        searchResult: action.filteredCharacters,
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
