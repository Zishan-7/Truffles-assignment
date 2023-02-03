import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import UserIcon from "../../assets/userIcon.png";
import NotificationIcon from "../../assets/notification.png";

const Navbar = () => {
  return (
    <div className="h-16 col-span-5 grid grid-cols-5  bg-[#f8f9fa] items-center border-b-[1px] border-[#F5F5F5]">
      <Image className="m-auto" src={Logo} width={170} alt={"Truffles"} />

      <div className="col-span-4 flex justify-between items-center px-8">
        <h1 className="text-2xl text-[#252F40] font-semibold">Dashboard</h1>
        <div className="flex items-center">
          <Image src={UserIcon} width={20} alt={"user"} />
          <p className="text-sm mx-5 text-[#67748E]">Evan Winter</p>
          <Image src={NotificationIcon} width={20} alt={"Notification"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
