import React from "react";

export default function MaxQouta() {
  return (
    <div className='flex flex-col gap-2 bg-zinc-800 p-16 mt-4 rounded-xl border-2 border-red-700'>
      <h1 className='mb-2 text-center text-white text-3xl  font-bold'>
        Max Quota exceeded
      </h1>

      <h4 className='text-center text-base'>{"Try again later"}</h4>
    </div>
  );
}
