import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
const BASE_URL = "http://localhost:3000/api/";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axios.interceptors.request.use(function (config) {
  // let date = new Date();
  // const UserLocalStorage = localStorage.getItem("user");
  // const decodeToken = jwt_decode(UserLocalStorage?.token);
  // if (decodeToken.exp < date.getTime() / 1000) {
  //   //het han
  // }
  // const token = UserLocalStorage.token;
  // config.headers.Authorization = token ? `${token}` : "";
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // The client was given an error response (5xx, 4xx)
    if (error.response) {
      return Promise.reject(error.response.data);
      // return error.response.data;
    }
    return error;
  }
);

export default axiosClient;
