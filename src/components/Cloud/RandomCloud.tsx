import { LargeButton } from 'components/Button/Button';
import Initial from 'components/toolTips/Initial';
import React from 'react';

const RandomCloud = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center bottom-[44px]">
      <Initial />
      <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
      <LargeButton text="다른 제시어" />
    </div>
  );
};

export default RandomCloud;
