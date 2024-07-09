import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://172.20.10.6:3000',// Replace with your API base URL from .env
  timeout: 5000
});

export default axiosInstance;