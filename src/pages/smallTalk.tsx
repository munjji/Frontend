import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/NavBar';
import Description from 'components/ToolTips/Description';

//  MBTI 부분을 텍스트로 받아와야 함
const SmallTalk: React.FC = () => {
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
      </div>
    </div>
  );
};

export default SmallTalk;
