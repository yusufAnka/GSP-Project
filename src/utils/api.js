import axios from 'axios';

// Base URL for the JSONPlaceholder API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

//Fetch posts from the JSONPlaceholder API.
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/*
  Fetch comments from the JSONPlaceholder API.
 */
export const fetchComments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
