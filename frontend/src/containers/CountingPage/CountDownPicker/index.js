import React, { useState, memo } from "react";
import { ButtonStyled, InputStyled } from "./CountDownPicker.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  startTimer,
  pauseTimer,
  resetTimer,
} from "../../../actions/countdown.actions";
const CountDownPicker = () => {
  console.log("picker change");
  const dispatch = useDispatch();
  //state date
  const initDate = useSelector((state) => state.countdown.timePicker);
  let handleDate = initDate ? new Date(initDate).toISOString() : ""; // convert date
  if (handleDate) {
    handleDate = handleDate.replace(/\.[^.]+$/, "");
  } // remove .
  const [datePicker, setDatePicker] = useState(handleDate);
  //state pause
  const [paused, setPaused] = useState(false);
  //handle onchange
  const handleOnChange = (e) => {
    setDatePicker(e.target.value);
  };
  //handle start countdown
  const handleTimePicker = (e) => {
    const dateFormat = new Date(datePicker);
    if (dateFormat != "Invalid Date") {
      dispatch(startTimer(dateFormat));
    }
  };
  //handle pause
  const handlePaused = (e) => {
    console.log("handle pause");
    setPaused(!paused);
    dispatch(pauseTimer(!paused));
  };
  //handle reset
  const handleReset = (e) => {
    console.log("handle reset");
    setPaused(false);
    dispatch(resetTimer());
  };

  return (
    <div className="countdown-pick">
      <p>Please pick day countdown</p>
      <InputStyled
        type="datetime-local"
        format="yyyy-mm-dd"
        value={datePicker ? datePicker : ""}
        onChange={handleOnChange}
      />
      <ButtonStyled active onClick={handleTimePicker}>
        Start
      </ButtonStyled>
      <ButtonStyled
        onClick={handlePaused}
        disabled={!initDate ? "disabled" : ""}
      >
        {paused ? "Resume" : "Pause"}
      </ButtonStyled>
      <ButtonStyled
        onClick={handleReset}
        disabled={!initDate ? "disabled" : ""}
      >
        Reset
      </ButtonStyled>
    </div>
  );
};

export default memo(CountDownPicker);
