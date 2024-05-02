import { searchById, searchByKeyWord } from "@/app/lib/actions/data";
import VideoPlayer from "../components/player";
import Link from "next/link";
import { useState } from "react";
import List from "../results/list";
import MaxQouta from "../components/max-qouta";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    v?: string;
  };
}) {
  const id = searchParams?.v || "";
  // console.log({ id });
  const response: any = await searchById(id);

  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between px-8 mt-10'>
      {!!response?.error ? (
        <div className='container flex flex-row gap-4'>
          <div className='w-3/4'>
            <VideoPlayer response={response} />
          </div>
          <div className='w-1/4'>
            <List title={response?.title} />
          </div>
        </div>
      ) : (
        <MaxQouta />
      )}
    </main>
  );
}
