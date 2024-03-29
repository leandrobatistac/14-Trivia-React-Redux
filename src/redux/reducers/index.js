import { combineReducers } from 'redux';
import token from './token';
import player from './score';

const INITIAL_STATE = {
  email: '',
  score: 0,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EMAIL':
    return {
      ...state,
      email: action.email,
      nome: action.nome,
    };
  default: return state;
  }
};

const rootReducer = combineReducers({
  email: user,
  token,
  player,
});

export default rootReducer;
