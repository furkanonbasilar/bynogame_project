import * as TYPES from "./actionTypes";

const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_CARDS: {
      return Object.assign({}, state, {
        cards: action.cards
      });
    }

    default:
      return state;
  }
};
