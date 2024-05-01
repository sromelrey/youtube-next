const { detailed } = require("@/app/lib/placeholder");

export default async function Home() {
  const response = await detailed.items.map((item: any) => {
    // This removes all the extra newlines between sections
    const cleanedString = item.snippet.description.replace(/\n\n+/g, "\n\n");

    // This joins the cleaned string sections with a single newline
    const finalString = cleanedString.split("\n").join("\n");

    return {
      id: item.id,
      title: item.snippet.title,
      description: finalString,
    };
  });
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between px-48 mt-10'>
      <div className='flex flex-col md:w-3/4 sm:w-full'>
        <iframe
          width='900'
          height='521'
          src={`https://www.youtube.com/embed/${response[0].id}`}
          allowFullScreen
          className='w-full h-[721px] md:h-[400px]'
        ></iframe>
        <div className='flex flex-col gap-2 mt-10'>
          <p className='truncate text-2xl font-bold'>{response[0].title}</p>
          <p className='line-clamp-2 text-sm w-2/3'>
            {response[0].description}
          </p>
        </div>
      </div>
    </main>
  );
}
