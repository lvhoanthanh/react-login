import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLogged: true, isLoading: false, user }
  : { isLogged: false, isLoading: false, user: {} };
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLogged: true,
        isLoading: false,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isLogged: false,
        isLoading: false,
        user: {},
      };
    case userConstants.LOGOUT:
      return {
        isLogged: false,
        isLoading: false,
        user: {},
      };
    default:
      return state;
  }
}
//The redux authentication reducer manages the state related to login (and logout) actions
