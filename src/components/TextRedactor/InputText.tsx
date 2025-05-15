import React from 'react';
import { useText } from '@/context/TextContext';

export default function InputText() {
  const { text, setText } = useText();
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="text">Text</label>
        <input
          id="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className={`w-full border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-2`}
          placeholder="Enter text here"
          type="text"
        />
      </div>
    </>
  );
}
