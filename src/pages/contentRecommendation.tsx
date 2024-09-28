import React, { useState } from 'react';
import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/NavBar';

const ContentRecommendation: React.FC = () => {
  const [activeBoxIndex, setActiveBoxIndex] = useState<number>(0); // 기본값으로 첫 번째 박스 활성화

  const handleBoxClick = (index: number) => {
    setActiveBoxIndex(index); // 클릭한 박스의 인덱스로 상태 업데이트
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar subject="아이스브레이킹" nonIcon />
      <div className="absolute bottom-[47px] flex flex-col justify-center items-center">
        <img className="mb-[-45px]" src="/assets/Char/lip.svg" alt="cloud_lip" />
        <div className="flex flex-col justify-center items-center gap-y-[16px]">
          {['drink', 'team', 'networking'].map((title, index) => (
            <ExpandedBox
              key={title}
              title={title}
              color="main"
              isClick={activeBoxIndex !== index}
              onClick={() => handleBoxClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRecommendation;
