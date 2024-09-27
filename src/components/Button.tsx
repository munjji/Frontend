import { ButtonProps } from 'types/Button.type';

export const LargeButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-4 h-[70px] w-[132px] left-10 top-9 border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span
        className={`h-9 w-21 text-2xl leading-[140%] flex justify-center items-center ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};

export const MediumButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-4 h-[58px] w-[110px] left-44 top-12 border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span
        className={`h-7 w-18 text-xl leading-[140%] flex justify-center items-center ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};

export const SmallButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-3 h-[46px] w-[88px] left-72 top-14 border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span
        className={`h-6 w-14 text-lg leading-[140%] flex justify-center items-center ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};

export const XSmallButton = ({ text, bgColor, textColor = 'text-black' }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-3 py-2 h-[33px] w-[66px] left-96 top-16 border-txt_primary border-2 shadow-[0_4px_4px_rgba(0,0,0,1)] rounded-[12px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span
        className={`h-4 w-10 text-xs leading-[140%] flex justify-center items-center ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};
