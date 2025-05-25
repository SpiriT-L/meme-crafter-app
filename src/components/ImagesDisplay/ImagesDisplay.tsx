'use client';

import { useText } from '@/context/TextContext';
import React from 'react';
import Image from 'next/image';

export default function ImagesDisplay() {
  const { text, isItalic, isBold, fontSize } = useText();
  return (
    <>
      <div className="relative w-full">
        <Image
          className="object-fit-cover rounded-[8px]"
          src="/2.jpg"
          alt="meme"
          width={1000}
          height={1000}
          priority
        />
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] ">
          <span
            className={`${isItalic ? 'italic' : ''} ${isBold ? 'font-bold' : ''} m-[5px]`.trim()}
            style={{ fontSize: `${fontSize}px` }}
          >
            {text}
          </span>
        </div>
      </div>
    </>
  );
}
