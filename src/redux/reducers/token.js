import { TOKEN_ID } from '../actions';

const INITIAL_STATE = {
  token: '',
};

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOKEN_ID: {
    return {
      ...state,
      token: action.payload.token,
      response: action.payload.response,
    };
  }
  default: return state;
  }
}

export default token;
