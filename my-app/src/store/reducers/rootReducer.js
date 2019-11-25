import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import singleCityReducer from './singleCityReducer'

const rootReducer = combineReducers(
    {
        citiesReducer: citiesReducer,
        singleCityReducer
    });//facilita el switch para los reducers

export default rootReducer;
