import React from 'react';
import { useText } from '@/context/TextContext';
import { FormatBold } from '@mui/icons-material';

export default function ButtonBold() {
  const { isBold, setIsBold } = useText();
  return (
    <>
      <button
        type="button"
        onClick={() => setIsBold(!isBold)}
        className={`w-[20px] h-[20px] rounded-[2px] bg-[#3e3f41] flex items-center justify-center border-[1px] border-solid border-[#eaeaea] ${
          isBold ? 'text-[#3e3f41] bg-[#eaeaea]' : 'text-[#eaeaea]'
        }`}
      >
        <FormatBold />
      </button>
    </>
  );
}
