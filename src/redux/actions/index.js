export const addEmail = (email, nome) => ({
  type: 'ADD_EMAIL',
  email,
  nome,
});

// Action Types

export const TOKEN_ID = 'TOKEN_ID';
export const SECONDS = 'SECONDS';
export const ADD_SCORE = 'SCORE';

// Action Creator

export const sendToken = (token) => ({
  type: TOKEN_ID,
  payload: {
    token,
  },
});

export const addScore = (score) => ({
  type: ADD_SCORE,
  payload: score,
});

// export const countSeconds = (second) => ({
//   type: SECONDS,
//   payload: {
//     second,
//   },
// });
