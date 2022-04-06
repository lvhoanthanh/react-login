import { userConstants } from "../constants";
const initialState = {
  isLoading: false,
  IsRegistered: false,
};
export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        isLoading: true,
        IsRegistered: false,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        isLoading: false,
        IsRegistered: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        isLoading: false,
        IsRegistered: false,
      };
    default:
      return state;
  }
}
//The redux registration reducer manages the registration section of the application state
