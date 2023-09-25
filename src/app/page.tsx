import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-white text-4xl">Dashboard</h1>
      <div className="flex flex-col items-stretch bg-grey-lighter min-h-screen">
        <div className="flex-1 text-white text-4xl text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
          Pagina con Scroll
        </div>
        <div className="flex-1 text-white text-4xl text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
          Pagina con Scroll
        </div>
        <div className="flex-1 text-white text-4xl text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
          Pagina con Scroll
        </div>
      </div>
    </>
  );
}
