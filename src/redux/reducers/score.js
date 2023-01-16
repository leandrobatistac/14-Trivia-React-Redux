import { ADD_SCORE } from '../actions';

const INITIAL_STATE = {
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_SCORE:
    return {
      ...state,
      score: action.payload.score,
      assertions: action.payload.assertions,
    };
  default: return state;
  }
};

export default player;
