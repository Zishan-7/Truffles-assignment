import React from "react";

const CustomTextfield = ({ label, type }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[#374151]">{label}</label>
      <input
        type={type}
        className="border-[1px] mt-2 border-[#D1D5DB] py-[0.5rem] px-4 rounded-md text-[#6B7280]  "
      />
    </div>
  );
};

export default CustomTextfield;
