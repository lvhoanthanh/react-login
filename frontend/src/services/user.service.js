import userApi from "../api/userApi";
export const userService = {
  login,
  logout,
  register,
};
//login
async function login(email, password) {
  try {
    const data = {
      email,
      password,
    };
    const user = await userApi.login(data);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}
//logout
async function logout() {
  localStorage.removeItem("user");
  await userApi.logout({});
}
async function register(user) {
  try {
    const data = await userApi.register(user);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
