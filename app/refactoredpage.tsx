import React from "react";
import Search from "./components/search";

export default function Page() {
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between px-48 mt-10'>
      <Search
        searchKeyWord={""}
        setSearchKeyword={() => {}}
        setVideos={() => {}}
      />
    </main>
  );
}
