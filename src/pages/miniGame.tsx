import NavBar from 'components/NavBar';
import React, { useState } from 'react';
import ShowGame from './Game/ShowGame';
import ExplainCloud from 'components/Cloud/ExplainCloud';

const MiniGame: React.FC = () => {
  const [gameType, setGameType] = useState<string>('백종원 게임');

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" />
      <ShowGame name={gameType} />
      {gameType === '훈민정음' || gameType === '반말 모드' ? (
        ''
      ) : (
        <ExplainCloud explanation="외국어, 외래어를 사용하지 않는 게임이에요. 시작 버튼을 누르면 제가 타이머를 셀게요!" />
      )}
    </div>
  );
};

export default MiniGame;
