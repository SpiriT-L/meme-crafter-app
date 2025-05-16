'use client';

import { useText } from '@/context/TextContext';

const FONT_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72];

export default function TextSizeChanger() {
  const { fontSize, setFontSize } = useText();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(Number(e.target.value));
  };

  return (
    <>
      <select
        id="font-size-select"
        value={fontSize}
        onChange={handleChange}
        className="h-[20px] rounded border border-gray-300 bg-[#3e3f41] text-[#eaeaea] text-xs"
      >
        {FONT_SIZES.map(size => (
          <option key={size} value={size}>
            {size} px
          </option>
        ))}
      </select>
    </>
  );
}
