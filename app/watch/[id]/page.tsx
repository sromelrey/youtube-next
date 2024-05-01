/* eslint-disable @next/next/no-async-client-component */
"use client";
import { searchById } from "@/app/lib/actions/data";
import { useRouter } from "next/navigation";

const { detailed } = require("@/app/lib/placeholder");

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    v?: string;
  };
}) {
  const id = searchParams?.v || "";
  const response = await searchById(id);

  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between px-48 mt-10'>
      {(response && Object.keys(response).length === 0) ||
      !Object.keys(response.error) ? (
        <div className='flex flex-col md:w-3/4 sm:w-full'>
          <iframe
            width='900'
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
      ) : (
        <h1 className='text-2xl'>
          {response.error.message || "No videos found."}
        </h1>
      )}
      ;
    </main>
  );
}
