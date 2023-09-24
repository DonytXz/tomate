import React from "react";
import Image from "next/image";

const ProfileSections = () => {
  return (
    <>
      <div className="flex items-center ml-4">
        <Image src={"/bell.svg"} alt={""} width={22.85} height={25} />
        <p className="text-white text-base mx-2">María Hernández</p>
        <Image src={"/arrowDown.svg"} alt={""} width={11.17} height={6.59} />\
        <div className="ml-2">
          <Image src={"/avatar.svg"} alt={""} width={48} height={48} />
        </div>
      </div>
    </>
  );
};

export default ProfileSections;
