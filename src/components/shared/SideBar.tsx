import React from "react";
import Menu from "./sideBar/Menu";

const SideBar = ({ pathname }: any) => {
  return (
    <>
      <div className="custom-box h-full mx-2 rounded-lg py-8 pr-6 pl-6 max-w-sm">
        <div className="flex">
          <Menu pathname={pathname} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
