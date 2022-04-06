import { countdownConstants } from "../constants";
// June 30, 2022 18:00:00
const initialState = {
  timePicker: "",
  paused: true,
  reset: false,
};
export function countdown(state = initialState, action) {
  switch (action.type) {
    case countdownConstants.START:
      return {
        reset: false,
        paused: false,
        timePicker: action.payload,
      };
    case countdownConstants.PAUSE:
      return { ...state, paused: action.status };
    case countdownConstants.RESET:
      return { timePicker: "", paused: false, reset: true };
    default:
      return state;
  }
}
