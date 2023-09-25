"use client";
import Image from "next/image";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import { usePathname } from "next/navigation";

const DashboardPage = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <main className="bg-primary-black h-full min-h-screen min-w-full">
      <div className="flex flex-col min-h-screen h-full">
        <Header />
        <div className="flex h-full w-full relative">
          <SideBar pathname={pathname} />
          <div className="w-full h-full p-6 ml-[338px] mt-[143.86px]">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
