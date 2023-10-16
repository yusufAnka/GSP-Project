import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async (resource) => {
  const response = await axios.get(`${API_BASE_URL}/${resource}`);
  return response.data;
};
