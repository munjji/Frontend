import React from 'react';

const Description: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[342px] border border-txt_primary border-2 px-[16px] py-[12px] rounded-description shadow-description">
        <p className="text-base text-center leading-content whitespace-pre-wrap break-words">
          {text}
        </p>
      </div>
      <img className="mt-[-8px]" src="/assets/triangle.svg" alt="triangle" />
    </div>
  );
};

export default Description;
