'use client';

import React, { createContext, useContext, useState } from 'react';

type TextContextType = {
  text: string;
  setText: (t: string) => void;
  isItalic: boolean;
  setIsItalic: (v: boolean) => void;
};

const TextContext = createContext<TextContextType>({
  text: '',
  setText: () => {},
  isItalic: false,
  setIsItalic: () => {},
});

export const useText = () => useContext(TextContext);

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState('');
  const [isItalic, setIsItalic] = useState(false);

  return (
    <TextContext.Provider value={{ text, setText, isItalic, setIsItalic }}>
      {children}
    </TextContext.Provider>
  );
}
