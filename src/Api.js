const API_URL = 'https://jsonplaceholder.typicode.com';

function fetchUsers() {
  return fetch(`${API_URL}/users`)
    .then(async (response) => await response.json());
}

export { fetchUsers };