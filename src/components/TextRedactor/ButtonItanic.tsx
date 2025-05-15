import React from 'react';
import { useText } from '@/context/TextContext';
import { FormatItalic } from '@mui/icons-material';

export default function ButtonItanic() {
  const { isItalic, setIsItalic } = useText();
  return (
    <>
      <button
        type="button"
        onClick={() => setIsItalic(!isItalic)}
        className={`w-[20px] h-[20px] rounded-[2px] bg-[#3e3f41] flex items-center justify-center border-[1px] border-solid border-[#eaeaea] ${
          isItalic ? 'text-[#3e3f41] bg-[#eaeaea]' : 'text-[#eaeaea]'
        }`}
      >
        <FormatItalic />
      </button>
    </>
  );
}
