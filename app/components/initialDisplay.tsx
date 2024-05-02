import React from "react";

export default function InitialDisplay() {
  return (
    <div className='flex flex-col gap-2 bg-zinc-800 p-16 mt-4 rounded-xl border-white'>
      <h1 className='mb-2 text-center text-white text-3xl  font-bold'>
        Try searching to get started
      </h1>

      <h4 className='text-center text-base'>{` Start watching videos to help us build a feed of videos you'll love.`}</h4>
    </div>
  );
}
