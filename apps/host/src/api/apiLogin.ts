import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import process from 'process';

const loginAxios: AxiosInstance = axios.create({
  baseURL: process.env.NX_PUBLIC_LOGIN_URL,
  timeout: 10000,
});

loginAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

loginAxios.interceptors.response.use(
  (value: AxiosResponse) => {
    return value;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

export default loginAxios;
