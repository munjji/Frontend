<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import { useQuery } from 'react-query';
import { SmalltalkResponse } from 'types/SmalltalkResponse';
import { getSmalltalks } from 'hooks/useSmall';
import { Smalltalk } from 'types/Smalltalk.type';

<<<<<<< Updated upstream
//  MBTI 부분을 텍스트로 받아와야 함
const SmallTalk: React.FC = () => {
=======
const SmallTalk: React.FC = () => {
  const { data, error, isLoading } = useQuery<SmalltalkResponse, Error>('subject', getSmalltalks);

  if (error) {
    console.log(error.message);
  }

  const [smallTalkList, setSmallTalkList] = useState<Smalltalk[]>([]);

  useEffect(() => {
    if (data) {
      setSmallTalkList(data.talk_subjects);
    }
  }, [data]);

  const [currentTopic, setCurrentTopic] = useState(0);

  const handleNextTopic = () => {
    if (smallTalkList) {
      setCurrentTopic((prev) => (prev + 1) % smallTalkList.length);
    }
  };

>>>>>>> Stashed changes
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[375px] h-[860px] p-4 bg-background_color relative">
          <div className="mt-[30px]">
            <NavBar subject="cloud" />
            <div className="flex justify-center items-center h-[450px]">
              <div className="text-6xl">MBTI</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="absolute top-[470px] left-[65px]">
                <Description text={`MBTI 첫 인상을 맞춰보세요!\n예시 : ENTJ 일거 같아요!`} />
              </div>
              <div className="absolute top-[550px] left-[90px]">
                <img
                  src="/assets/GoormCharacter.svg"
                  alt="cloud-character"
                  className="w-[192px] h-[192px]"
                />
              </div>

              <div className="absolute left-[20px] top-[700px] w-[335px]">
                <LargeButton text="다음 주제" />
              </div>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
=======
        <div className="absolute text-6xl top-64">
          {smallTalkList ? smallTalkList[currentTopic]?.subject : '주제가 없습니다.'}
        </div>
      </div>
      <div className="absolute flex flex-col justify-center items-center w-[352px] bottom-[44px]">
        <Description text={smallTalkList ? smallTalkList[currentTopic]?.description : ''} />
        <img className="mb-[-45px]" src="/assets/GoormCharacter.svg" alt="goorm-character" />
        <LargeButton text="다른 게임 할래요" onClick={handleNextTopic} />
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default SmallTalk;
