import React from "react";
import Image from "next/image";
import { menuItem } from "@/types/DashboardTypes";
import Link from "next/link";

const MenuItem = ({ src, srcImg, txt, subMenu, pathname, mobile }: any) => {
  return (
    <>
      <Link href={src}>
        <div
          className={`flex px-2 py-3 w-full lg:w-72 max-w-xs ${
            pathname == src ? "bg-primary-white" : ""
          } ${mobile ? "" : ""}`}
        >
          <Image src={srcImg} alt={txt} width={24} height={24} />
          <p className="text-white pl-4 text-xl ">{txt}</p>
          {subMenu && (
            <div className="ml-auto flex justify-center items-center">
              <div className="my-auto">
                <Image
                  src={"/arrowDown.svg"}
                  alt={""}
                  width={12}
                  height={7.08}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
