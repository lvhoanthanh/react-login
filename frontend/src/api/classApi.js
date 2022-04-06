import axiosClient from "./axiosClient";

const classApi = {
  getAll: (data) => {
    const url = "/classes/";
    return axiosClient.get(url, {
      headers: data,
    });
  },
};
export default classApi;
