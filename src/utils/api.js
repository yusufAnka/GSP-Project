import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const fetchComments = async () => {
  const response = await axios.get(`${BASE_URL}/comments`);
  return response.data;
};

export const fetchPhotos = async () => {
  const response = await axios.get(`${BASE_URL}/photos`);
  return response.data;
};
