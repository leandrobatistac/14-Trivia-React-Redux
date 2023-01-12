import { combineReducers } from 'redux';

const INITIAL_STATE = {
  email: '',
  placar: 0,
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
});

export default rootReducer;
