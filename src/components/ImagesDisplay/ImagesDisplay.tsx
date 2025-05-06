'use client';

import { useText } from '@/context/TextContext';
import React from 'react';
import Image from 'next/image';

export default function ImagesDisplay() {
  const { text } = useText();
  return (
    <>
      <Image
        className="object-fit-cover rounded-[8px]"
        src="/1.png"
        alt="meme"
        width={1000}
        height={1000}
        priority
      />
      <span>{text}</span>
    </>
  );
}
