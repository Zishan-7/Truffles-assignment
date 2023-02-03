import React from "react";
import CustomDropdown from "./CustomDropdown";
import CustomTextfield from "./CustomTextfield";

const BusinessInfo = () => {
  return (
    <div className="flex flex-col py-8 px-14">
      <h3 className="font-semibold text-2xl ">Business Information</h3>
      <p className="text-[#6B7280] text-sm">
        Use permanent address where you can receive mail
      </p>

      <div className="grid grid-cols-3 my-5 gap-7">
        <div className="col-span-3">
          <CustomTextfield label="Account ID" type={"text"} />
        </div>
        <div className="col-span-3">
          <CustomTextfield label="Company Name" type={"text"} />
        </div>

        <div className="col-span-3 grid grid-cols-2 gap-7">
          {" "}
          <CustomDropdown
            label="Country of Incorporation"
            options={[
              "United States",
              "India",
              "Uniked Kingdom",
              "Canada",
              "Spain",
            ]}
          />{" "}
          <CustomDropdown
            label="Country of Operation"
            options={[
              "United States",
              "India",
              "Uniked Kingdom",
              "Canada",
              "Spain",
            ]}
          />
        </div>

        <div className="col-span-3">
          <CustomDropdown
            label="Business Type"
            options={[
              "United States",
              "India",
              "Uniked Kingdom",
              "Canada",
              "Spain",
            ]}
          />
        </div>

        <div className="col-span-3">
          <CustomTextfield label="Company Address" type={"text"} />
        </div>
        <CustomTextfield label="Zip/Postal" type={"number"} />
        <CustomTextfield label="State/Province" type={"text"} />
        <CustomTextfield label="City" type={"text"} />

        <div className="col-span-3">
          <CustomTextfield label="Registration Number" type={"number"} />
        </div>

        <div className="col-span-3">
          <CustomTextfield label="Incorporation Date" type={"date"} />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
