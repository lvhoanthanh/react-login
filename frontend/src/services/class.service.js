import classApi from "../api/classApi";
import { authHeader } from "../helpers/authHeader";
export const classService = {
  getAllClasses,
};

async function getAllClasses() {
  try {
    const data = authHeader();
    const response = await classApi.getAll(data);
    if (response) {
      return response;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
