import React from 'react';

const ShowGame: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex mt-[200px] gap-[24px]">
      <button type="button">
        <img className="w-[48px] h-[48px]" src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <p className="text-[48px] text-center">{name}</p>
      <button type="button">
        <img src="/assets/right_arrow.svg" alt="right_arrow" />
      </button>
    </div>
  );
};

export default ShowGame;
