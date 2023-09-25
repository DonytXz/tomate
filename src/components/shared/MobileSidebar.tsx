import React from "react";
import Menu from "./sideBar/Menu";
import ConfigSection from "./sideBar/menu/ConfigSection";

const MobileSideBar = ({ pathname, openMenu }: any) => {
  return (
    <>
      <div
        className={`custom-box overflow-auto h-[calc(100%-106.22px)] mx-2 rounded-lg py-8 pr-6 pl-6 lg:hidden fixed max-w-sm mt-[122.22px] z-50
      ${openMenu ? "block" : "hidden"} w-20`}
      >
        {/* <div className="custom-box h-[calc(100%-175.83px)] mx-2 rounded-lg py-8 pr-6 pl-6 max-w-sm fixed mt-[143.86px] z-50"> */}
        <div className="flex flex-col">
          <Menu mobile={true} pathname={pathname} />
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <ConfigSection />
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
