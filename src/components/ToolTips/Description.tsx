import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border border-[2px] px-[16px] py-[12px] rounded-description shadow-description">
        <p className="text-base text-center whitespace-pre-wrap">{text}</p>
      </div>
      <img
        className="w-[12px] h-[6px] drop-shadow-triangle"
        src="/assets/triangle.svg"
        alt="triangle"
      />
    </div>
  );
};

export default Description;
