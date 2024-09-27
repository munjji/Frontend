import React from 'react';

interface ShowGameProps {
  name: string;
  onButtonClick?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ShowGame: React.FC<ShowGameProps> = ({ name, onButtonClick, onPrevious, onNext }) => {
  return (
    <div className="flex mt-[200px] gap-[24px]">
      <button type="button" onClick={onPrevious}>
        <img className="w-[48px] h-[48px]" src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <p className="text-[48px] text-center whitespace-nowrap">{name}</p>
      <button type="button" onClick={onNext}>
        <img src="/assets/right_arrow.svg" alt="right_arrow" />
      </button>
    </div>
  );
};

export default ShowGame;
