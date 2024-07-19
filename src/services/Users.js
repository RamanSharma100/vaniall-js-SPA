import API from './API.js';

export const loadUsers = async () => {
  app.store.users = await API.get('https://jsonplaceholder.typicode.com/users');
};
