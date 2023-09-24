"use client";
import Image from "next/image";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import { usePathname } from "next/navigation";

const DashboardPage = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <main className="bg-primary-black h-screen min-h-screen min-w-full">
      <div className="flex flex-col min-h-screen h-screen">
        <Header />
        <div className="flex h-full w-full">
          <SideBar pathname={pathname} />
          <div className="w-full h-full p-6">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
