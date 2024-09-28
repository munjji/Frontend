import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-2 border-txt_primary px-[16px] py-[12px] rounded-description shadow-description bg-white">
        <p className="text-base text-center whitespace-pre-wrap">{text}</p>
      </div>
      <img
        className="w-[12px] h-[6px] mt-[-8px] drop-shadow-triangle z-40"
        src="/assets/triangle.svg"
        alt="triangle"
      />
    </div>
  );
};

export default Description;
