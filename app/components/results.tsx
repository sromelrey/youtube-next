import Link from "next/link";
import React from "react";

export default function Results({ items }: any) {
  return items && items.length > 0 ? (
    items.map((item: any) => (
      <div key={item.id} className='w-full'>
        <Link
          href={`/watch?v=${item.id}`}
          className='flex flex-row gap-10 cursor-pointer'
        >
          <div>
            <iframe
              width={500}
              height={200}
              src={`https://www.youtube.com/embed/${item.id}`}
              allowFullScreen
              className='rounded-lg  cursor-pointer'
            ></iframe>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='truncate text-lg font-bold'>{item.title}</p>
            <p className='line-clamp-1 text-sm w-2/3'>{item.description}</p>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <p>No videos found.</p>
  );
}
