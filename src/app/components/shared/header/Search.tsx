import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <>
      <div className="flex bg-primary-gray py-3 px-8 rounded-lg max-h-12 max-w-md">
        <Image src={"/search.svg"} alt={""} width={17.05} height={17.06} />
        <input
          className="bg-transparent ml-2"
          type="text"
          placeholder="Buscar módulo"
        />
      </div>
    </>
  );
};

export default Search;
