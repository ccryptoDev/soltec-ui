import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { environment } from '@schema-driven/core/environment';

const apiClient: AxiosInstance = axios.create({
  baseURL: `$http://18.219.225.37:3333/api/swagger`,
  headers: {
    'Content-type': 'application/json'
  }
});


export default apiClient;
