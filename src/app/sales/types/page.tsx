import Header from "@/app/components/shared/Header";
import SideBar from "@/app/components/shared/SideBar";
import React from "react";

const saleTypes = () => {
  return (
    <>
      <main className="bg-primary-black h-screen min-h-screen min-w-full">
        <div className="flex flex-col min-h-screen h-screen">
          <Header />
          <div className="flex h-full w-full">
            <SideBar />
            <div className="w-full h-full p-6">
              <h1 className="text-white text-4xl">Ventas</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default saleTypes;
