import { countdownConstants } from "../constants/";

export const startTimer = (time) => {
  return {
    type: countdownConstants.START,
    payload: time,
  };
};
export const pauseTimer = (status) => {
  return {
    type: countdownConstants.PAUSE,
    status,
  };
};
export const resetTimer = () => {
  return {
    type: countdownConstants.RESET,
  };
};
