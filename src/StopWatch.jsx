import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && !isStop) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isStop, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
    setIsStop(!isStop);
  };
  const handleReset = () => {
    setIsActive(false);
    setIsStop(true);
    setTime(0);
  };
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h4>Time:{formatTime(time)}</h4>
      <div>
        <button onClick={handleStartStop}>
          {isActive && !isStop ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default StopWatch;
