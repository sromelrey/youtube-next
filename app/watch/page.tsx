import {
  searchById,
  staticSearchById,
  staticSearchByKeyWord,
} from "@/app/lib/actions/data";
import VideoPlayer from "../components/player";
import { title } from "process";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    v?: string;
  };
}) {
  const id = searchParams?.v || "";
  const response = await staticSearchById(id);
  const results: any = await staticSearchByKeyWord("?search_query=One+Piece");

  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between px-8 mt-10'>
      <div className='container flex flex-row gap-4'>
        <div className='w-3/4'>
          {response && Object.keys(response).length !== 0 ? (
            <VideoPlayer
              response={response as { id: ""; title: ""; description: "" }}
            />
          ) : (
            <h1 className='text-2xl'>{"No videos found."}</h1>
          )}
        </div>
        <div className='w-1/4'>
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
        </div>
      </div>
    </main>
  );
}
