import React, { Suspense } from "react";
import CardsResults from "../components/skeletons";
import { staticSearchByKeyWord } from "../lib/actions/data";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    search_query?: string;
  };
}) {
  const search_query = searchParams?.search_query || "";
  const results: any = await staticSearchByKeyWord(search_query);

  return (
    <div className='flex flex-col gap-8 mt-16'>
      <Suspense fallback={<CardsResults />}>
        {results.length > 0 &&
          results.map((result: any) => (
            <div
              key={result.id}
              className='w-full p-2 hover:rounded-lg hover:border border-gray-100 hover:bg-zinc-600'
            >
              <Link
                href={`/watch?v=${result.id}`}
                className='flex flex-row gap-10 cursor-pointer'
              >
                <div>
                  <iframe
                    width={500}
                    height={200}
                    src={`https://www.youtube.com/embed/${result.id}`}
                    allowFullScreen
                    className='rounded-lg  cursor-pointer'
                  ></iframe>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='truncate text-lg font-bold'>{result.title}</p>
                  <p className='line-clamp-1 text-sm w-2/3'>
                    {result.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </Suspense>
    </div>
  );
}
