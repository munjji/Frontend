import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/Bar/NavBar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SelectBar from 'components/Bar/SelectBar';

const Plans: React.FC = () => {
  const history = useHistory();
  const [selected, setSelected] = useState<'plans' | 'mypage'>('plans'); // 기본 선택: 'plans'

  const goToIce = () => {
    history.push(`/plans/ice-breaking`);
  };

  const goToSituation = () => {
    history.push(`/plans/content-recommendation`);
  };

  return (
    <div className="flex flex-col items-center">
      <SelectBar selected={selected} setSelected={setSelected} /> {/* 수정된 부분 */}
      <div className="absolute flex flex-col gap-y-[16px] justify-center items-center bottom-[34px]">
        <ExpandedBox title="iceBraking" color="main" onClick={goToIce} isClick={false} />
        <ExpandedBox title="situation" color="main" onClick={goToSituation} isClick={false} />
      </div>
    </div>
  );
};

export default Plans;
