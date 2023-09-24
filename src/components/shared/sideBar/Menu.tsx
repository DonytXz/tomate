import React from "react";
import MenuItem from "./menu/MenuItem";
import { menuItem } from "@/types/DashboardTypes";
import { menuItems } from "@/mock/Menu";

const Menu = ({ pathname }: any) => {
  return (
    <>
      <div className="flex flex-col w-full">
        {menuItems.map((item: menuItem, index: number) => {
          return (
            <MenuItem
              pathname={pathname}
              key={index}
              src={item.src}
              srcImg={item.srcImg}
              txt={item.txt}
              subMenu={item.subMenu}
            />
          );
        })}
      </div>
    </>
  );
};

export default Menu;
