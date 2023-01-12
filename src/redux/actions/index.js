export const addEmail = (email, nome) => ({
  type: 'ADD_EMAIL',
  email,
  nome,
});

// Action Types

export const TOKEN_ID = 'TOKEN_ID';

// Action Creator

export const sendToken = (token) => ({
  type: TOKEN_ID,
  payload: {
    token,
  },
});
