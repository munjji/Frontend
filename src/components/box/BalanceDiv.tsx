import React from 'react';

interface BalanceDivProps {
  balance?: string;
}

const BalanceDiv: React.FC<BalanceDivProps> = ({ balance }) => {
  return (
    <div className="text-large text-center leading-content whitespace-pre-wrap max-w-[335px] max-h-[196px] break-words">
      {balance}
    </div>
  );
};

export default BalanceDiv;
