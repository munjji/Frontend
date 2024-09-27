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
    { id: 1, name: '반말 모드', description: '반말로 대화하는 게임입니다.' },
    { id: 2, name: '훈민정음', description: '훈민정음을 배우는 게임입니다.' },
    { id: 3, name: '초성 퀴즈', description: '초성을 맞추는 퀴즈 게임입니다.' },
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
    const newGameType =
      currentIndex > 0 ? gameList[currentIndex - 1].name : gameList[gameList.length - 1].name;
    setGameType(newGameType);
    setIsRunning(false); // 게임 변경 시 스톱워치 중지
  };

  const handleNextGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    const newGameType =
      currentIndex < gameList.length - 1 ? gameList[currentIndex + 1].name : gameList[0].name;
    setGameType(newGameType);
    setIsRunning(false); // 게임 변경 시 스톱워치 중지
  };

  // 현재 게임에 대한 설명 찾기
  const currentGameDescription = gameList.find((game) => game.name === gameType)?.description || '';

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
          key={gameType} // key 속성 추가
          name={gameType}
          explanation={currentGameDescription}
          isRunning={isRunning}
          onToggleRunning={handleToggleRunning}
        />
      ) : gameType === '초성 퀴즈' ? (
        <RandomCloud />
      ) : (
        <ExplainCloud explanation={currentGameDescription} />
      )}
      <GameModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default MiniGame;
