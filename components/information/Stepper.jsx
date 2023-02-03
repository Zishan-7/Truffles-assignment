import React from "react";

const Stepper = ({
  title,
  isActiveStep,
  isVisitedStep,
  notVisitedStep,
  isLastStep,
}) => {
  return (
    <div
      className={`relative text-gray-500 ${
        !isLastStep && "border-l-2 border-[#E5E7EB]"
      } h-20 ${isVisitedStep && "border-[#7445F8]"}`}
    >
      <div className="mb-10 ml-6 flex items-center">
        <div
          className={`absolute flex items-center justify-center w-8 h-8  ${
            isVisitedStep ? "bg-[#7445F8]" : "bg-[#FFFFFF]"
          }  rounded-full -left-4 ring-2 ${
            isActiveStep || isVisitedStep ? "ring-[#7445F8]" : "ring-[#D1D5DB]"
          } `}
        >
          {isVisitedStep && (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
          {isActiveStep && (
            <div className="h-2 w-2 rounded-lg bg-[#7445F8]"></div>
          )}
          {notVisitedStep && (
            // <div className="h-2 w-2 rounded-lg bg-[#7445F8]"></div>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          )}
        </div>
        <h3 className="w-48 text-sm ml-4  text-black">{title}</h3>
      </div>
    </div>
  );
};

export default Stepper;
