'use client';

import React, { createContext, useContext, useState } from 'react';

type TextContextType = {
  text: string;
  setText: (t: string) => void;
  isItalic: boolean;
  setIsItalic: (v: boolean) => void;
  isBold: boolean;
  setIsBold: (v: boolean) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
};

const TextContext = createContext<TextContextType>({
  text: '',
  setText: () => {},
  isItalic: false,
  setIsItalic: () => {},
  isBold: false,
  setIsBold: () => {},
  fontSize: 16,
  setFontSize: () => {},
});

export const useText = () => useContext(TextContext);

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState('');
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  return (
    <TextContext.Provider
      value={{
        text,
        setText,
        isItalic,
        setIsItalic,
        isBold,
        setIsBold,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}
