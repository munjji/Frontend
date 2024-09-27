import React from 'react';

const OnboardingDiv: React.FC<{ onBoarding?: string }> = ({ onBoarding }) => {
  return (
    <div className="flex w-[295px] h-[156px] justify-center items-center">
      <div className="font-normal text-left whitespace-pre-wrap text-[12px] break-words leading-content tracking-[-0.6px]">
        {onBoarding}
      </div>
    </div>
  );
};

export default OnboardingDiv;
