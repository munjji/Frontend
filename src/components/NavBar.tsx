import React from 'react';
import titleContentsData from 'data/titleContentsData';

const NavBar: React.FC<{ subject: string }> = ({ subject }) => {
  return (
    <div className="relative flex py-[10px] justify-center items-center">
      <button type="button" className="absolute left-[20px]">
        <img src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <div className="">
        <div className="flex items-center justify-center gap-[4px]">
          <img className="w-[20px] h-[20px]" src={`/assets/${subject}.svg`} alt={subject} />
          <p className="text-base text-center">{titleContentsData[subject].title}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
