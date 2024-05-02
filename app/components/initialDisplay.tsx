import React from "react";

export default function InitialDisplay() {
  return (
    <div className='flex flex-row gap-6 bg-zinc-800 p-28'>
      <h1 className='text-white text-3xl'>Try searching to get started</h1>
      <h4 className='text-white text-3xl'>{` Start watching videos to help us build a feed of videos you'll love.`}</h4>
    </div>
  );
}
