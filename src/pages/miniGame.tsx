import NavBar from 'components/NavBar';
import React, { useState } from 'react';
import ShowGame from './Game/ShowGame';
import ExplainCloud from 'components/Cloud/ExplainCloud';
import ButtonCloud from 'components/Cloud/ButtonCloud';
import RandomCloud from 'components/Cloud/RandomCloud';
import GameModal from 'components/Modal/GameModal';

const MiniGame: React.FC = () => {
  const [gameType, setGameType] = useState<string>('반말 모드');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal 상태 추가

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" />
      <ShowGame name={gameType} onButtonClick={handleModalOpen} />
      {gameType === '훈민정음' || gameType === '반말 모드' ? (
        <ButtonCloud
          name={gameType}
          explanation="외국어, 외래어를 사용하지 않는 게임이에요. 시작 버튼을 누르면 제가 타이머를 셀게요!"
        />
      ) : gameType === '초성 퀴즈' ? (
        <RandomCloud />
      ) : (
        <ExplainCloud explanation="외국어, 외래어를 사용하지 않는 게임이에요. 시작 버튼을 누르면 제가 타이머를 셀게요!" />
      )}
      <GameModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default MiniGame;
