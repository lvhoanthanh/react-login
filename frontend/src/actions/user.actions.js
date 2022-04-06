import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers/history";
//register actions
function registerRequest() {
  return { type: userConstants.REGISTER_REQUEST };
}
function registerSuccess(user) {
  return { type: userConstants.REGISTER_SUCCESS, user };
}
function registerFailure(error) {
  return { type: userConstants.REGISTER_FAILURE, error };
}
//login actions
function loginRequest() {
  return { type: userConstants.LOGIN_REQUEST };
}
function loginSuccess(user) {
  return { type: userConstants.LOGIN_SUCCESS, user };
}
function loginFailure(error) {
  return { type: userConstants.LOGIN_FAILURE, error };
}
//get all
function getAllRequest() {
  return { type: userConstants.GET_ALL_REQUEST };
}
function getAllSuccess(users) {
  return { type: userConstants.GET_ALL_SUCCESS, users };
}
function getAllFailure(error) {
  return { type: userConstants.GET_ALL_FAILURE, error };
}
//dispatch action login
function login(email, password) {
  return (dispatch) => {
    dispatch(loginRequest());
    userService.login(email, password).then(
      (user) => {
        dispatch(loginSuccess(user));
        history.push("/"); // redirect to home page when login success
        dispatch(alertActions.success("Login success!"));
      },
      (error) => {
        dispatch(loginFailure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}
//dispatch action logout
function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
//dispatch action register
function register(user) {
  return (dispatch) => {
    dispatch(registerRequest(user));
    userService.register(user).then(
      (user) => {
        dispatch(registerSuccess());
        history.push("/login"); // redirect login when resgister success
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(registerFailure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}
//dispatch action get all users;
function getAll() {
  return (dispatch) => {
    dispatch(getAllRequest());
    userService.getAll().then(
      (users) => {
        dispatch(getAllSuccess(users));
      },
      (error) => {
        dispatch(getAllFailure(error.toString()));
      }
    );
  };
}

export const userActions = {
  login,
  logout,
  register,
  getAll,
};
