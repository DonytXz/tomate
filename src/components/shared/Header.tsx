import Image from "next/image";
import React from "react";
import Search from "./header/Search";
import ProfileSections from "./header/ProfileSections";

const Header = ({ setOpenMenu, openMenu }: any) => {
  return (
    <>
      <div className="custom-box m-2 rounded-lg py-6 px-8 flex fixed w-[calc(100vw-16px)] z-50">
        <div className="flex items-center mr-4 lg:hidden cursor-pointer">
          <Image
            onClick={() => setOpenMenu(!openMenu)}
            src={"/menu.png"}
            alt={"Brand logo"}
            width={40}
            height={40}
          />
        </div>
        <Image
          className="hidden lg:block"
          src={"/logo.png"}
          alt={"Brand logo"}
          width={226.55}
          height={80}
        />
        <Image
          className="block lg:hidden"
          src={"/logo.png"}
          alt={"Brand logo"}
          width={113.55}
          height={40}
        />
        <div className="flex ml-auto items-center">
          <Search />
          <ProfileSections />
        </div>
      </div>
    </>
  );
};

export default Header;
