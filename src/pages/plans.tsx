import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/NavBar';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Plans: React.FC = () => {
  const history = useHistory();

  const goToIce = () => {
    history.push(`/plans/ice-breaking`);
  };

  const goToSituation = () => {
    history.push(`/plans/content-recommendation`);
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="플랜 둘러보기" nonIcon />
      <div className="absolute flex flex-col gap-y-[16px] justify-center items-center bottom-[34px]">
        <ExpandedBox title="iceBraking" color="main" onClick={goToIce} isClick={false} />
        <ExpandedBox title="situation" color="main" onClick={goToSituation} isClick={false} />
      </div>
    </div>
  );
};

export default Plans;
