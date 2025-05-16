'use client';

import ButtonItanic from './ButtonItanic';
import ButtonBold from './ButtonBold';
import InputText from './InputText';
import TextSizeChanger from './TextSizeChanger';

export default function TextRedactor() {
  return (
    <>
      <h1>redactor</h1>
      <div className="flex flex-col gap-4 m-1">
        <div className="flex flex-row gap-2">
          <ButtonBold />
          <ButtonItanic />
          <TextSizeChanger />
        </div>
        <InputText />

        <div className="flex flex-col gap-2">
          <label htmlFor="size">Size</label>
          <input
            type="number"
            id="size"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        {/*
        <div className="flex flex-col gap-2">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            id="color"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="background">Background</label>
          <input
            type="color"
            id="background"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="alignment">Alignment</label>
          <select
            id="alignment"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="spacing">Line Spacing</label>
          <input
            type="number"
            id="spacing"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="letter-spacing">Letter Spacing</label>
          <input
            type="number"
            id="letter-spacing"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="word-spacing">Word Spacing</label>
          <input
            type="number"
            id="word-spacing"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-decoration">Text Decoration</label>
          <select
            id="text-decoration"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line Through</option>
            <option value="blink">Blink</option>
            <option value="italic">Italic</option>
            <option value="bold">Bold</option>
            <option value="small-caps">Small Caps</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
            <option value="normal">Normal</option>
            <option value="oblique">Oblique</option>
            <option value="inherit">Inherit</option>
            <option value="initial">Initial</option>
            <option value="unset">Unset</option>
            <option value="revert">Revert</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-transform">Text Transform</label>
          <select
            id="text-transform"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-shadow">Text Shadow</label>
          <input
            type="text"
            id="text-shadow"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-indent">Text Indent</label>
          <input
            type="number"
            id="text-indent"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-overflow">Text Overflow</label>
          <select
            id="text-overflow"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="clip">Clip</option>
            <option value="ellipsis">Ellipsis</option>
            <option value="string">String</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-align-last">Text Align Last</label>
          <select
            id="text-align-last"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="auto">Auto</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="center">Center</option>
            <option value="justify">Justify</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text-justify">Text Justify</label>
          <select
            id="text-justify"
            className="w-full h-[40px] border-[1px] border-solid border-[#eaeaea] rounded-[8px] bg-[#3e3f41] p-4"
          >
            <option value="auto">Auto</option>
            <option value="none">None</option>
            <option value="inter-word">Inter Word</option>
            <option value="inter-character">Inter Character</option>
            <option value="distribute">Distribute</option>
            <option value="distribute-all-lines">Distribute All Lines</option>
            <option value="distribute-letter">Distribute Letter</option>
            <option value="distribute-word">Distribute Word</option>
            <option value="distribute-all-lines">Distribute All Lines</option>
            <option value="distribute-letter">Distribute Letter</option>
          </select>
        </div> */}
      </div>
    </>
  );
}
