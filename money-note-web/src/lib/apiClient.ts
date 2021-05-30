import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/oauth2',
  headers: {},
  timeout: 1000,
});

export default apiClient;
