import { LargeButton } from 'components/Button/Button';
import Description from 'components/toolTips/Description';
import Timer from 'components/toolTips/Timer';
import React, { useState } from 'react';

const ButtonCloud: React.FC<{ name: string; explanation: string }> = ({ name, explanation }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState<number>(0); // 초기값을 0으로 설정
  const [seconds, setSeconds] = useState<number>(0); // 초기값을 0으로 설정

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleTimeUpdate = (mins: number, secs: number) => {
    setMinutes(mins);
    setSeconds(secs);
  };

  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[44px]">
      {isRunning ? (
        <Timer isRunning={isRunning} onTimeUpdate={handleTimeUpdate} />
      ) : (
        <Description
          text={
            isRunning || (minutes === 0 && seconds === 0)
              ? explanation
              : `${minutes}분 ${seconds}초나 진행했어요!
다음 게임도 진행해볼까요?`
          }
        />
      )}
      <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
      <LargeButton
        onClick={handleToggle}
        text={
          isRunning ? '그만하기' : minutes === 0 && seconds === 0 ? '시작하기' : '다시 시작하기'
        }
      />
    </div>
  );
};

export default ButtonCloud;
