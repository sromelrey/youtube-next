import { useState } from "react";
import { searchByKeyWord } from "../lib/actions/data";
import Link from "next/link";

export default async function list({ title }: { title: string }) {
  const results = await searchByKeyWord(title);

  return (
    <>
      {results.length > 0 &&
        results.map((result: any) => (
          <div
            key={result.id}
            className='w-full p-2 mb-10 hover:rounded-lg hover:border border-gray-100 hover:bg-zinc-600'
          >
            <Link
              href={`/watch?v=${result.id}`}
              className='flex flex-row gap-2 cursor-pointer'
            >
              <div>
                <iframe
                  width={150}
                  height={100}
                  src={`https://www.youtube.com/embed/${result.id}`}
                  allowFullScreen
                  className='rounded-lg  cursor-pointer'
                ></iframe>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='line-clamp-1  text-lg font-bold'>
                  {result.title}
                </p>
                <p className='line-clamp-1 text-sm w-2/3'>
                  {result.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
