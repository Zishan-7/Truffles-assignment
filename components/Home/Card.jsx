import React from "react";

import Image from "next/image";


const Card = ({icon, title}) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-md px-5 py-6 flex justify-between w-full">
      <div className=" flex flex-col">  <p className="text-[#67748E]">{title}</p>
      <p className="font-bold text-xl text-[#252F40] mt-4">$00,000</p>
      </div>

      <div className="w-20 h-20 bg-gradient-to-b from-[#A76FFF] to-[#7445F8] rounded-md flex justify-center items-center">
      <Image  src={icon} width={30} alt={"Truffles"} />
      </div>
     </div>
  );
};

export default Card;
