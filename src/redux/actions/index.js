export const addEmail = (email, nome) => ({
  type: 'ADD_EMAIL',
  email,
  nome,
});

export const requestData = () => ({
  type: 'REQUEST_DATA',
});
