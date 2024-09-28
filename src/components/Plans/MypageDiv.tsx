import Profile from 'components/Mypage/Profile';
import React from 'react';

const MypageDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Profile colors="bg-white" />
    </div>
  );
};

export default MypageDiv;
