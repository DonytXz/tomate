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
    <main className="h-full min-h-screen min-w-full ">
      <div className="flex flex-col min-h-screen h-full w-full">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex h-full w-full relative">
          <SideBar pathname={pathname} />
          <MobileSideBar openMenu={openMenu} pathname={pathname} />
          <div
            className={`w-full h-full overflow-y-scrooll p-3 lg:p-6 absolute lg:w-[calc(100%-338px)] lg:left-[338px] top-[127px] ${
              openMenu ? "mt-[100vh]" : ""
            } h-fit`}
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
