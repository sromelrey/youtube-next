import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { searchByKeyWord } from "../lib/actions/data";

export default function Search({
  searchKeyWord,
  setSearchKeyword,
  setVideos,
}: {
  searchKeyWord: string;
  setSearchKeyword: any;
  setVideos: any;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    /*
     * @Debouncing - is a programming practice that limits the rate
     *             at which a function can fire. In our case,
     *             you only want to query the database when the user has
     *             stopped typing.
     */
    setSearchKeyword(`${pathname}?${term.toString()}`);
  }, 500);

  const handleSubmitSearchKeyword = async () => {
    const response = await searchByKeyWord(searchKeyWord);
    setVideos(response);
  };

  return (
    <div className='mt-4 flex items-center justify-between gap-2 md:mt-8 bg-zinc-900  border-gray-200 py-[9px] text-sm outline-2 placeholder:text-black md:w-2/4 sm:w-full pr-4 rounded-3xl'>
      <div className='relative flex flex-1 flex-shrink-0'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='peer block w-full rounded-md border bg-zinc-900 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-black'
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
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
