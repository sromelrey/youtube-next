"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

export default function Search() {
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
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log(term);
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
      <div className='relative flex flex-1 flex-shrink-0'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      </div>
      <button
        className='sw-auto justify-center
       bg-slate-500 hover:bg-slate-500
        focus-visible:outline-slate-500
         active:bg-slate-600'
      >
        <MagnifyingGlassCircleIcon className='ml-2 h-5 w-5 text-gray-50' />
      </button>
    </div>
  );
}

/*
 * useSearchParams- Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.
 * usePathname - Lets you read the current URL's pathname. For example, the route /dashboard/invoices, usePathname would return '/dashboard/invoices'.
 * useRouter - Enables navigation between routes within client components programmatically. There are multiple methods you can use.
 */
