import * as API from "utils/Api";
import * as TYPES from "./actionTypes";

export const getCards = () => (dispatch, getState) => {
  API.getAllCards().then(response => {
    dispatch({ type: TYPES.SET_CARDS, cards: response });
  });
};
