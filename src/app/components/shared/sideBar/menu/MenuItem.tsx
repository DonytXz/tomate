import React from "react";
import Image from "next/image";
import { menuItem } from "@/types/DashboardTypes";

const MenuItem = ({ src, txt, subMenu }: menuItem) => {
  return (
    <>
      <div className="flex px-2 py-4 w-full">
        <Image src={src} alt={""} width={24} height={24} />
        <p className="text-white pl-4 text-xl">{txt}</p>
        {subMenu && (
          <div className="ml-auto flex justify-center items-center">
            <div className="my-auto">
              <Image src={"/arrowDown.svg"} alt={""} width={12} height={7.08} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItem;
