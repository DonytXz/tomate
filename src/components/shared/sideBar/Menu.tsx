import React from "react";
import MenuItem from "./menu/MenuItem";
import { menuItem } from "@/types/DashboardTypes";
import { menuItems } from "@/mock/Menu";

const Menu = ({ pathname, mobile = false }: any) => {
  return (
    <>
      <div className="flex flex-col lg:w-full justify-center">
        {menuItems.map((item: menuItem, index: number) => {
          return (
            <MenuItem
              mobile={mobile}
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
