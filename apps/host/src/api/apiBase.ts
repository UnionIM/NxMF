import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import * as process from 'process';

const baseAxios: AxiosInstance = axios.create({
  baseURL: process.env.NX_PUBLIC_BASE_URL,
  timeout: 10000,
});

baseAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

baseAxios.interceptors.response.use(
  (value: AxiosResponse) => {
    return value;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

export default baseAxios;
