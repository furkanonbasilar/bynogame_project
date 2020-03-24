import { combineReducers } from "redux";
import cardsReducer from "redux/cards/reducer";

const rootReducers = combineReducers({ cards: cardsReducer });

export default rootReducers;
