import React from "react";

const CustomDropdown = ({ label, options }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[#374151]">{label}</label>
      <select className="border-[1px] mt-2 border-[#D1D5DB] py-[0.5rem] px-2 rounded-md text-[#6B7280] ">
        {options.map((value, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
