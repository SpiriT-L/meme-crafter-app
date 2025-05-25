'use client';

import { useText } from '@/context/TextContext';
import React from 'react';
import Image from 'next/image';

export default function ImagesDisplay() {
  const { text, isItalic, isBold, fontSize } = useText();
  return (
    <>
      <Image
        className="object-fit-cover rounded-[8px]"
        src="/2.jpg"
        alt="meme"
        width={1000}
        height={1000}
        priority
      />
      <span
        className={`${isItalic ? 'italic' : ''} ${isBold ? 'font-bold' : ''}`.trim()}
        style={{ fontSize: `${fontSize}px` }}
      >
        {text}
      </span>
    </>
  );
}
