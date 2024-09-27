import { XSmallButton } from './Button';
import { ReactComponent as QuestionIcon } from '../assets/_.svg';

export const Tab = () => {
  return (
    <div className="absolute flex flex-row items-center gap-[10px] w-[375px] h-[39px] left-[92px] top-[87px] p-min-20px bg-#80FFC5">
      <XSmallButton text="처음 만났어요" />
      <XSmallButton text="시간 조율" />
      <XSmallButton text="스몰 토크" />
      <XSmallButton>
        <QuestionIcon />
      </XSmallButton>
    </div>
  );
};

export default Tab;
