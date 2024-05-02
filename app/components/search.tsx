"use client";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { staticSearch, staticSearchByKeyWord } from "../lib/actions/data";
import Link from "next/link";

export default function Search() {
  const [searchKeyWord, setSearchKeyword] = useState("");
  const router = useRouter();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const keyWord = String(term).replace(/\s/g, "+");
    const params = new URLSearchParams(keyWord);

    setSearchKeyword(keyWord);
  }, 500);

  const handleSubmitSearchKeyword = () => {
    window.location.href = `/results?search_query=${searchKeyWord}`;
  };

  return (
    <div className='mt-4 flex items-center justify-between gap-2  bg-zinc-900  border-gray-200 text-sm outline-2 placeholder:text-black md:w-2/4 sm:w-full pr-4 rounded-3xl'>
      <div className='relative flex flex-1 flex-shrink-0 h-10'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='peer block w-full rounded-md border bg-zinc-900 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-black'
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      </div>

      <button
        onClick={handleSubmitSearchKeyword}
        className='sw-auto justify-center round bg-zinc-900 focus-visible:outline-zinc-500 active:bg-zinc-600 w-auto h-10'
      >
        <MagnifyingGlassCircleIcon className='ml-2 h-10 w-10' />
      </button>
    </div>
  );
}
