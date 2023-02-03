import Image from "next/image";
import Logo from "../assets/logo.png";
import Stepper from "@/components/information/Stepper";
import { useState } from "react";
import UserInfo from "@/components/information/UserInfo";
import BusinessInfo from "@/components/information/BusinessInfo";
import Head from "next/head";

export default function information() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const steppers = [
    { title: "User Information", component: <UserInfo /> },
    { title: "Business Information", component: <BusinessInfo /> },
    { title: "Business Information 2" },
    { title: "Upload Documents" },
    { title: "Preview" },
  ];
  return (
    <>
      <Head>
        <title>Information</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] grid grid-cols-4">
        {/* Navbar */}

        <div className=" h-14 col-span-4 px-10 flex justify-between items-center border-b-[1px] border-[#DCDCDC]">
          <Image src={Logo} width={170} alt={"Truffles"} />
          <p className="text-sm text-[#202020]">
            Having Trouble?
            <span className="text-[#775DA6] cursor-pointer ">Get Help</span>
          </p>
        </div>

        <div className="bg-[#FAFAFA] flex flex-col items-center py-6">
          {steppers.map((step, index) => (
            <Stepper
              title={step.title}
              key={index}
              isActiveStep={currentIndex === index}
              isVisitedStep={index < currentIndex}
              notVisitedStep={index > currentIndex}
              isLastStep={index === steppers.length - 1}
            />
          ))}
        </div>

        <div className="col-span-3 ">
          {/* Form Component */}

          {steppers[currentIndex].component}

          <div className="flex justify-between my-10 px-14">
            <button
              disabled={currentIndex === 0}
              onClick={() => {
                if (currentIndex !== 0) {
                  setcurrentIndex(currentIndex - 1);
                }
              }}
              className="border-[1px] border-[#D1D5DB] rounded-md py-2 px-8"
            >
              Back
            </button>
            <button
              disabled={currentIndex === steppers.length}
              onClick={() => {
                if (
                  currentIndex !== steppers.length &&
                  steppers[currentIndex + 1].component
                ) {
                  setcurrentIndex(currentIndex + 1);
                }
              }}
              className="border-[1px] bg-[#7445F8] text-white rounded-md py-2 px-8"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
