import axios from 'axios';

const baseUrl = 'https://localhost:3000';

export const fetchAPI = axios.create({
  baseUrl,
  timeout: 1000,
});
