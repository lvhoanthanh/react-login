import { userConstants } from "../constants";
const initialState = {
  isLoading: false,
};
export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        isLoading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        isLoading: false,
        items: action.users,
      };
    case userConstants.GETALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
