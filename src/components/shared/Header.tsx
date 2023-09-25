import Image from "next/image";
import React from "react";
import Search from "./header/Search";
import ProfileSections from "./header/ProfileSections";

const Header = () => {
  return (
    <>
      <div className="custom-box m-2 rounded-lg py-6 px-8 flex fixed w-[calc(100%-16px)] z-50">
        <Image src={"/logo.png"} alt={"Brand logo"} width={226.55} height={80} />
        <div className="flex ml-auto items-center">
          <Search />
          <ProfileSections />
        </div>
      </div>
    </>
  );
};

export default Header;
