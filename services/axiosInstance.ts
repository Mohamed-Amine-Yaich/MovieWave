import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL, // Replace with your API base URL from .env

});

export default axiosInstance;