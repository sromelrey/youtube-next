const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";


export function CardResultsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-zinc-700 p-2 shadow-sm`}
    >
      <div className='flex flex-row gap-2'>
        <CardSkeleton />
        <div className={`${shimmer} flex flex-col p-4 w-2/3  shadow-sm`}>
          <div className='h-7 bg-zinc-200 rounded-full dark:bg-zinc-200 w-2/3 mb-4'></div>
          <div className=' h-4 bg-zinc-200 rounded-full dark:bg-zinc-200 w-[100px]mb-4 mt-6'></div>
          <div className=' h-4 bg-zinc-200 rounded-full dark:bg-zinc-200  w-1/3  mb-4 mt-6'></div>
          <div className=' h-2.5 bg-zinc-200 rounded-full dark:bg-zinc-200  w-full mb-4 mt-6'></div>
        </div>
      </div>
    </div>
  );
}

export default function CardsResults() {
  return (
    <div className='flex flex-col gap-4 mt-16'>
      <CardResultsSkeleton />
      <CardResultsSkeleton />
      <CardResultsSkeleton />
      <CardResultsSkeleton />
    </div>
  );
}
export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-1/3`}
    >
      <div className='flex items-center justify-center truncate rounded-xl bg-white px-4 py-8'>
        <div className=' h-24 w-5/6 rounded-md bg-gray-200' />
      </div>
    </div>
  );
}

