import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
// import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({ charactersReducer });

export default rootReducer;
