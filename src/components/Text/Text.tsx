import React from 'react';
import { useText } from '@/context/TextContext';

export default function Text() {
  const { text } = useText();

  return (
    <div>
      <span>{text}</span>
      console.log({text});
    </div>
  );
}
