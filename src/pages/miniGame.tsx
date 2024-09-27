import NavBar from 'components/NavBar';
import React, { useState } from 'react';
import ShowGame from './Game/ShowGame';
import ExplainCloud from 'components/Cloud/ExplainCloud';
import ButtonCloud from 'components/Cloud/ButtonCloud';
import RandomCloud from 'components/Cloud/RandomCloud';
import GameModal from 'components/Modal/GameModal';

const MiniGame: React.FC = () => {
  const [gameType, setGameType] = useState<string>('반말 모드');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const gameList = [
    { id: 1, name: '반말 모드', description: '설명...' },
    { id: 2, name: '훈민정음', description: '설명...' },
    { id: 3, name: '초성 퀴즈', description: '설명...' },
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleToggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handlePreviousGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    if (currentIndex > 0) {
      setGameType(gameList[currentIndex - 1].name);
    } else {
      // 현재가 첫 번째 게임일 경우, 마지막 게임으로 이동
      setGameType(gameList[gameList.length - 1].name);
    }
  };

  const handleNextGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    if (currentIndex < gameList.length - 1) {
      setGameType(gameList[currentIndex + 1].name);
    } else {
      // 현재가 마지막 게임일 경우, 첫 번째 게임으로 이동
      setGameType(gameList[0].name);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" />
      <ShowGame
        name={gameType}
        onButtonClick={isRunning ? handleModalOpen : undefined}
        onPrevious={handlePreviousGame}
        onNext={handleNextGame}
      />
      {gameType === '훈민정음' || gameType === '반말 모드' ? (
        <ButtonCloud
          name={gameType}
          explanation="외국어, 외래어를 사용하지 않는 게임이에요. 시작 버튼을 누르면 제가 타이머를 셀게요!"
          isRunning={isRunning}
          onToggleRunning={handleToggleRunning}
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
