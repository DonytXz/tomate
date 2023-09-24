import React from "react";
import MenuItem from "./menu/MenuItem";
import { menuItem } from "@/types/DashboardTypes";
import { menuItems } from "@/mock/Menu";

const Menu = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        {menuItems.map((item: menuItem) => {
          return (
            <MenuItem src={item.src} txt={item.txt} subMenu={item.subMenu} />
          );
        })}
      </div>
    </>
  );
};

export default Menu;
