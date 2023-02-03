import React from "react";
import Image from "next/image";

const PriceCard = ({ name, price, id, icon }) => {
  return (
    <div className=" w-full grid grid-cols-5 py-4 items-center px-2">
      <div>
        <Image className="m-auto" src={icon} width={15} alt={name} />
      </div>
      <div className=" col-span-3 flex flex-col w-2/3 items-start">
        <p className="">{name.toUpperCase()}</p>
        <p className="text-[0.6rem] font-light">TFID: {id}</p>
      </div>
      <p className="font-semibold text-sm">$ {price}</p>
    </div>
  );
};

export default PriceCard;
