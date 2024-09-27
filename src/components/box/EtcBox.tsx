import React from 'react';
import bgColors from 'data/bgColors';
import QuestionDiv from './QuestionDiv';
import BalanceDiv from './BalanceDiv';
import OnboardingDiv from './OnboardingDiv';

interface EtcBoxProps {
  subject: string;
  color: keyof typeof bgColors;
  question?: string;
  content?: string;
  balance?: string;
  onBoarding?: string;
}

const EtcBox: React.FC<EtcBoxProps> = ({
  color,
  subject,
  question,
  content,
  balance,
  onBoarding,
}) => {
  const boxStyle: string = `flex flex-col ${bgColors[color]} justify-center items-center border border-2 border_txt_primary w-[335px] px-[32px] py-[20px] rounded-description shadow-description`;

  return (
    <div className={boxStyle}>
      {subject === 'questionList' ? (
        <QuestionDiv question={question} content={content} />
      ) : subject === 'balance' ? (
        <BalanceDiv balance={balance} />
      ) : (
        <OnboardingDiv onBoarding={onBoarding} />
      )}
    </div>
  );
};

export default EtcBox;
