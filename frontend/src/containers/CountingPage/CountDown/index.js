import React from "react";
import CountDownItem from "./CountDownItem";
function CountDown({ days, hours, minutes, seconds, reset }) {
  return (
    <div className="countdown-list">
      <CountDownItem value={days} type={"Days"} />
      <CountDownItem value={hours} type={"Hours"} />
      <CountDownItem value={minutes} type={"Minutes"} />
      <CountDownItem value={seconds} type={"Seconds"} />
    </div>
  );
}
export default CountDown;
