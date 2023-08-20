import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const fetchAPI = axios.create({
  baseURL,
  timeout: 1000,
});
