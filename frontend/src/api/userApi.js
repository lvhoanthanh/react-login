import axiosClient from "./axiosClient";

const userApi = {
  register: (data) => {
    const url = "/user/register";
    return axiosClient.post(url, data);
  },
  login: (data) => {
    const url = "/user/login";
    return axiosClient.post(url, data);
  },
  logout: () => {
    const url = "user/logout";
    return axiosClient.post(url);
  },
};

export default userApi;
