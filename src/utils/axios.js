import axios from "axios";
import globalConfig from "./globalConfig"

const axiosInstance = axios.create({
  baseURL: globalConfig.ENDPOINT
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
