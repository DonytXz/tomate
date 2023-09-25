import React from "react";
import Menu from "./sideBar/Menu";
import ConfigSection from "./sideBar/menu/ConfigSection";

const SideBar = ({ pathname }: any) => {
  return (
    <>
      <div className="custom-box  h-[calc(100%-150.83px)] mx-2 rounded-lg py-8 pr-6 pl-6 max-w-sm fixed mt-[143.86px] z-50">
      {/* <div className="custom-box h-[calc(100%-175.83px)] mx-2 rounded-lg py-8 pr-6 pl-6 max-w-sm fixed mt-[143.86px] z-50"> */}
        <div className="flex flex-col">
          <Menu pathname={pathname} />
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <ConfigSection />
        </div>
      </div>
    </>
  );
};

export default SideBar;
