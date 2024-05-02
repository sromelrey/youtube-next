import React from "react";
import InitialDisplay from "./components/initialDisplay";

export default function Page() {
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center  px-48 mt-2'>
      <div>
        <InitialDisplay />
      </div>
    </main>
  );
}
