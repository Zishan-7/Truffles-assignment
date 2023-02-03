import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Balance from "../../assets/balance.png";
import DownArrow from "../../assets/downArrow.png";
import UpArrow from "../../assets/upArrow.png";
import Card from "./Card";
import GraphComponent from "./GraphComponent";
import PriceCard from "./PriceCard";
import Calender from "./Calender";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] grid grid-cols-5 bg-[#f8f9fa] pb-10">
      {/* navbar */}

      <div className="h-16 col-span-5 grid grid-cols-5  bg-[#f8f9fa]  justify-between items-center border-b-[1px] border-[#F5F5F5]">
        <Image src={Logo} width={170} alt={"Truffles"} />

        <div className="col-span-4 flex justify-between items-center px-8">
          <h1 className="text-2xl text-[#252F40] font-semibold">Dashboard</h1>
          <p className="text-sm text-[#67748E]">Evan Winter</p>
        </div>
      </div>

      {/* Menubar  */}

      <div className="min-h-[100vh] flex flex-col items-center">
        <div className="w-[80%] h-10  my-5 rounded-md ">
          <p className="text-[#252F40]">Dashboard</p>
        </div>
        <div className="w-[80%] h-10 my-5 rounded-md ">
          <p className="text-[#252F40]"> Invoice</p>
        </div>
        <div className="w-[80%] h-10 my-5 rounded-md ">
          <p className="text-[#252F40]">Proforma</p>
        </div>
        <div className="w-[80%] h-10 my-5 rounded-md ">
          <p className="text-[#252F40]">Swap</p>
        </div> <div className="w-[80%] h-10 my-5 rounded-md ">
          <p className="text-[#252F40]">Transfer</p>
        </div> <div className="w-[80%] h-10 my-5 rounded-md ">
          <p className="text-[#252F40]">Contacts</p>
        </div>
      </div>

      {/* Main Content */}

      <div className="col-span-4 h-[100vh] px-8">
        <div className="w-full py-3 bg-[#8553FB] rounded-lg text-white grid grid-cols-12 items-center">
          <div></div>
          <div className="col-span-10">
            {" "}
            <p>Please complete the KYC</p>
            <p className="text-xs">
              Please follow the instructions in the email to complete account
              verification. Make sure to check your promotions/spam as well.
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid h-[70vh] grid-cols-3 gap-6 my-10">
          <div className="col-span-2 h-1/2 grid grid-cols-2 gap-6 bg-[#f8f9fa]rounded-lg ">
           
            <Card icon={Balance} title={"Fiat Balance"} />
            <Card icon={Balance} title="Crypto Balance"/>
            <Card icon={DownArrow} title="Receivable"/>
            <Card icon={UpArrow} title="Payables" />
            <div className="col-span-2">
              <GraphComponent />{" "}
            </div>
          </div>
          <div className="drop-shadow-md bg-white rounded-xl "> <Calender/>
            <PriceCard name="Quicksilver" id={71687681} price={"145000"} />
            <PriceCard name="Bitcoin" id={8398833} price={"145000"} />
            <PriceCard name="Quicksilver" id={71687681} price={"145000"} />
            <PriceCard name="Quicksilver" id={71687681} price={"145000"} />
            <PriceCard name="Quicksilver" id={71687681} price={"145000"} />
            <PriceCard name="Quicksilver" id={71687681} price={"145000"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
