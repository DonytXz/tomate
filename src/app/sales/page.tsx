import React from "react";
import Header from "../components/shared/Header";
import SideBar from "../components/shared/SideBar";

const sales = () => {
  return (
    <>
      <main className="bg-primary-black h-screen min-h-screen min-w-full">
        <div className="flex flex-col min-h-screen h-screen">
          <Header />
          <div className="flex h-full w-full">
            <SideBar />
            <div className="w-full h-full p-6">
              <h1 className="text-white text-4xl">Tipos de Ventas</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default sales;
