import React from "react";
import CustomDropdown from "./CustomDropdown";
import CustomTextfield from "./CustomTextfield";

const UserInfo = () => {
  return (
    <div className="flex flex-col py-8 px-14">
      <h3 className="font-semibold text-2xl ">User Information</h3>
      <p className="text-[#6B7280] text-sm">Please enter your details</p>

      <div className="grid grid-cols-3 my-5 gap-7">
        <CustomDropdown label="Title" options={["Mr.", "Mrs.", "Miss"]} />
        <CustomTextfield label="First Name" type={"text"} />
        <CustomTextfield label="Last Name" type={"text"} />

        <div className="col-span-3">
          <CustomTextfield label="Mobile Number" type={"number"} />
        </div>
        <div className="col-span-3">
          <CustomDropdown label="Gender" options={["Male", "Female"]} />
        </div>

        <div className="col-span-3">
          <CustomDropdown
            label="Nationality"
            options={[
              "United States",
              "India",
              "Uniked Kingdom",
              "Canada",
              "Spain",
            ]}
          />
        </div>

        <div className="col-span-3 grid grid-cols-2 gap-7">
          <CustomTextfield label="Residential Address" type={"text"} />
          <CustomTextfield label="Postal Code" type={"text"} />
        </div>

        <div className="col-span-3">
          <CustomTextfield label="Occupation" type={"text"} />
        </div>
        <div className="col-span-3">
          <CustomTextfield label="Date of birth" type={"date"} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
