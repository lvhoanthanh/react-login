import { useEffect, useState, useRef } from "react";

const useCountdown = (datePicker, pause) => {
  let countDownDate = new Date(datePicker).getTime();
  const interval = useRef(0);
  // console.log("countDownDate trong useCountDown", countDownDate);
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  useEffect(() => {
    // console.log(countDown, "countdown trong useeffect");
    if (!pause) {
      interval.current = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [countDownDate, pause]);
  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
