import axios from 'axios';

const baseUrl = 'https://ecommercenews.eu/wp-json/wp/v1';

function get(endpoint) {
  return axios.get(`${baseUrl}/${endpoint}/`);
}

function getPosts() {
  return get('posts')
    .then(response => response.data);
}

export default {
  getPosts,
};
