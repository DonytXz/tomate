import Image from "next/image";
import SideBar from "./components/shared/SideBar";
import Header from "./components/shared/Header";

export default function Home() {
  return (
    <main className="bg-primary-black h-screen min-h-screen min-w-full">
      <div className="flex flex-col min-h-screen h-screen">
        <Header />
        <SideBar />
      </div>
    </main>
  );
}
