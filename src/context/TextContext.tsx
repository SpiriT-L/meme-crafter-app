'use client';

import React, { createContext, useState, useContext } from 'react';

const TextContext = createContext<{
  text: string;
  setText: (t: string) => void;
}>({ text: '', setText: () => {} });

export const useText = () => useContext(TextContext);

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
