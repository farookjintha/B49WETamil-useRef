import { useEffect, useRef, useState } from "react";

const RefUpdate = () => {
  let countRef = useRef(0);
  let timerRef = useRef(100);
  var interval;

  const [timerMsg, setTimerMsg] = useState("");

  useEffect(() => {
    interval = setInterval(() => {
      if (timerRef.current >= 0) {
        timerRef.current = timerRef.current - 1;
        console.log("Timer: ", timerRef.current);
        if (timerRef.current <= 90 && timerRef.current > 80) {
          setTimerMsg("90 seconds left!");
        }
        if (timerRef.current <= 80 && timerRef.current > 70) {
          setTimerMsg("80 seconds left!");
        }
        if (timerRef.current <= 70 && timerRef.current > 60) {
          setTimerMsg("70 seconds left!");
        }
        if (timerRef.current <= 60 && timerRef.current > 50) {
          setTimerMsg("60 seconds left!");
        }
        if (timerRef.current <= 50 && timerRef.current > 40) {
          setTimerMsg("50 seconds left!");
        }
        if (timerRef.current <= 40 && timerRef.current > 30) {
          setTimerMsg("40 seconds left!");
        }
        if (timerRef.current <= 30 && timerRef.current > 20) {
          setTimerMsg("30 seconds left!");
        }
        if (timerRef.current <= 20 && timerRef.current > 10) {
          setTimerMsg("20 seconds left!");
        }
        if (timerRef.current <= 10 && timerRef.current > 0) {
          setTimerMsg("10 seconds left!");
        }
        if (timerRef.current === 0) {
          setTimerMsg("Time up!");
        }
      }
    }, 1000);
  }, []);

  const handleCount = () => {
    countRef.current = countRef.current + 1;
    console.log("Count (Ref): ", countRef.current);
  };

  console.log("Rendering (Ref)...");
  return (
    <div>
      <h2>Updating Ref</h2>
      <h3>Count: {countRef.current}</h3>
      <button onClick={handleCount}>Increment</button>

      <h2>Timer:</h2>
      <h3>{timerMsg}</h3>
      <button onClick={() => clearInterval(interval)}>Clear Interval</button>
    </div>
  );
};

export default RefUpdate;
