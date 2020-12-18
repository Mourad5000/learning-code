//CREACION DEL ROOTREDUCER QUE ES LA COMBINACION DE TODOS LOS REDUCERS
import { combineReducers } from "redux";
//importar todos los reducers
import pokeReducer from "./pokeReducer";

const rootReducer = combineReducers({ pokeReducer });
//se pasa dentro del combineReducers({todos los reducers}) --> se crea el objeto

export default rootReducer;
