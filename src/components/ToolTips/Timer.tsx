import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const totalSeconds = Math.floor(time / 1000);
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  }, [time]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[342px] border border-txt_primary border-2 px-[16px] py-[12px] rounded-description shadow-description">
        <p className="text-[36px] text-center leading-[150%] whitespace-pre-wrap break-words">
          <time>
            {`0${minutes}`.slice(-2)} : {`0${seconds}`.slice(-2)}
          </time>
        </p>
      </div>
      <img className="mt-[-8px]" src="/assets/triangle.svg" alt="triangle" />
    </div>
  );
};

export default Timer;
