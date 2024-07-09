import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MW_API_BASE_URL,// Replace with your API base URL from .env
  timeout: 5000
});

export default axiosInstance;