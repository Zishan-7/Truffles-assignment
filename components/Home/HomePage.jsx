import React, { useState } from "react";
import Balance from "../../assets/balance.png";
import DownArrow from "../../assets/downArrow.png";
import UpArrow from "../../assets/upArrow.png";
import Card from "./Card";
import GraphComponent from "./GraphComponent";
import PriceCard from "./PriceCard";
import Calender from "./Calender";
import Incoming from "../../assets/incoming.png";
import Outgoing from "../../assets/outgoing.png";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import AlertIcon from "../../assets/dashBoard/alert.png";
import CancelIcon from "../../assets/dashBoard/cancel.png";
import Image from "next/image";

const HomePage = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <div className="grid grid-cols-5 bg-[#f8f9fa] pb-10">
      <Navbar />

      <MenuBar />

      {/* Main Content */}

      <div className="col-span-4 px-8">
        {showAlert && (
          <div className="w-full py-3 bg-[#8553FB] rounded-lg text-white grid grid-cols-12 items-center">
            <div>
              <Image
                className="m-auto"
                src={AlertIcon}
                width={20}
                alt={"Alert"}
              />
            </div>
            <div className="col-span-10">
              {" "}
              <p>Please complete the KYC</p>
              <p className="text-xs">
                Please follow the instructions in the email to complete account
                verification. Make sure to check your promotions/spam as well.
              </p>
            </div>
            <div>
              {" "}
              <Image
                onClick={() => setShowAlert(false)}
                className="m-auto cursor-pointer"
                src={CancelIcon}
                width={25}
                alt={"Cancel"}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 my-10">
          <div className="col-span-2 h-1/2 grid grid-cols-2 gap-6 bg-[#f8f9fa]rounded-lg ">
            <Card icon={Balance} title={"Fiat Balance"} />
            <Card icon={Balance} title="Crypto Balance" />
            <Card icon={DownArrow} title="Receivable" />
            <Card icon={UpArrow} title="Payables" />
            <div className="col-span-2">
              <GraphComponent />{" "}
            </div>
          </div>
          <div className="drop-shadow-md bg-white rounded-xl ">
            {" "}
            <Calender />
            <PriceCard
              name="Quicksilver"
              id={71687681}
              price={"145000"}
              icon={Incoming}
            />
            <PriceCard
              name="Bitcoin"
              id={8398833}
              price={"145000"}
              icon={Outgoing}
            />
            <PriceCard
              name="Quicksilver"
              id={71687681}
              price={"145000"}
              icon={Incoming}
            />
            <PriceCard
              name="Quicksilver"
              id={71687681}
              price={"145000"}
              icon={Outgoing}
            />
            <PriceCard
              name="Quicksilver"
              id={71687681}
              price={"145000"}
              icon={Incoming}
            />
            <PriceCard
              name="Quicksilver"
              id={71687681}
              price={"145000"}
              icon={Outgoing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
