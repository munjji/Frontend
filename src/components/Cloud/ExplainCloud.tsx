import Description from 'components/toolTips/Description';
import React from 'react';
import { LargeButton } from 'components/Button/Button';

const ExplainCloud: React.FC<{ explanation: string }> = ({ explanation }) => {
  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[44px]">
      <Description text={explanation} />
      <img className="z-[-10] mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
      <LargeButton text="시작하기" />
    </div>
  );
};

export default ExplainCloud;
