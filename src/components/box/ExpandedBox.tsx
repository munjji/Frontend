import React from 'react';
import titleContentsData from 'data/titleContentsData';

interface ExpandedBoxProps {
  title: string;
  color: keyof typeof colors; // colors 객체의 키만 허용
  isClick: boolean;
}

const colors = {
  main: 'bg-[#F7FF00]',
  white: 'bg-white',
};

const ExpandedBox: React.FC<ExpandedBoxProps> = ({ title, isClick, color }) => {
  const boxStyle: string = `flex flex-col ${colors[color]} justify-center items-center border border-2 border-black gap-[21px] w-[335px] px-[32px] py-[38px] rounded-description shadow-description`;
  return (
    <div className={boxStyle}>
      <div className="flex gap-[10px]">
        <img src={`/assets/${title}.svg`} alt={title} />
        <p className="text-[24px] text-center leading-title">{titleContentsData[title].title}</p>
      </div>
      {!isClick ? (
        <div className="flex w-[295px] h-[215px] justify-center items-center">
          <p className="text-txt_secondary text-base text-center leading-content whitespace-pre-wrap">
            {titleContentsData[title].content}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExpandedBox;
