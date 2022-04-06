import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./user.reducer";
import { alert } from "./alert.reducer";
import { countdown } from "./countdown.reducer";
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  countdown,
});

export default rootReducer;
