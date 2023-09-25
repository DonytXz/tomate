import React from "react";
import Image from "next/image";
import Link from "next/link";

const ConfigSection = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* <Link href={src}> */}
        <div className={`flex px-2 py-3 w-72 max-w-xs `}>
          <Image
            src={"/config.svg"}
            alt={"Configuración"}
            width={24}
            height={24}
          />
          <p className="text-white pl-4 text-xl hidden lg:block">Configuración</p>
        </div>
        <div className={`flex px-2 py-3 w-72 max-w-xs `}>
          <Image src={"/help.svg"} alt={"Ayuda"} width={24} height={24} />
          <p className="text-white pl-4 text-xl hidden lg:block">Ayuda</p>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
};

export default ConfigSection;
