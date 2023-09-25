"use client";
import Image from "next/image";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileSideBar from "./shared/MobileSidebar";

const DashboardPage = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  return (
    <main className="bg-primary-black h-full min-h-screen min-w-full">
      <div className="flex flex-col min-h-screen h-full">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex h-full w-full relative">
          <SideBar pathname={pathname} />
          <MobileSideBar openMenu={openMenu} pathname={pathname} />
          <div
            className={`lg:w-full h-full p-6 lg:ml-[338px] mt-[143.86px] ${
              openMenu ? " absolute left-20" : ""
            } `}
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
