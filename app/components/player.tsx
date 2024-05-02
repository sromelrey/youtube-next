import React from "react";

export default function VideoPlayer({
  response,
}: {
  response: { id: string; title: string; description: string };
}) {
  return (
    <div className='w-screen flex flex-col sm:w-full'>
      <iframe
        width='950'
        height='521'
        src={`https://www.youtube.com/embed/${response.id}`}
        allowFullScreen
        className='w-full h-[721px] md:h-[400px]'
      ></iframe>
      <div className='flex flex-col gap-2 mt-10'>
        <p className='truncate text-2xl font-bold'>{response.title}</p>
        <p className='line-clamp-2 text-sm w-2/3'>{response.description}</p>
      </div>
    </div>
  );
}
