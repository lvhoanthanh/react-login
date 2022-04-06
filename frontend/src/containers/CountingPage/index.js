import React from "react";
import { CountDownWrapper } from "./CountingPage.styled";
import CountDown from "./CountDown";
import ExpiredNotice from "./ExpiredNotice";
import CountDownPicker from "./CountDownPicker";
import { useSelector } from "react-redux";
import { useCountdown } from "../../hooks/useCountdown";
function CountingPage() {
  // const timePicker = useSelector((state) => state.countdown.timePicker);
  const { timePicker, paused, reset } = useSelector((state) => state.countdown);
  let [days, hours, minutes, seconds] = useCountdown(timePicker, paused);
  const timeRemaining = days + hours + minutes + seconds;
  if (timeRemaining <= 0) {
    // reset value date
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  // console.log(days + hours + minutes + seconds);
  return (
    <CountDownWrapper>
      <div className="countdown-box">
        <h2 className="countdown-title">Counter Down</h2>
        <CountDownPicker />
        {timeRemaining <= 0 ? (
          <ExpiredNotice />
        ) : (
          <CountDown
            reset={reset}
            days={days || 0}
            hours={hours || 0}
            minutes={minutes || 0}
            seconds={seconds || 0}
          />
        )}
      </div>
    </CountDownWrapper>
  );
}

export default CountingPage;
