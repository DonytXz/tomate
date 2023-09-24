import React from "react";
import Menu from "./sideBar/Menu";

const SideBar = () => {
  return (
    <>
      <div className="custom-box h-full mx-2 rounded-lg py-8 pr-6 pl-6 max-w-xs">
        <div className="flex">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SideBar;
