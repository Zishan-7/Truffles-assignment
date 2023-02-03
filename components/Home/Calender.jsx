import React, { useState } from "react";
// import "./calender.css";

import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full p-4 ">
      <Calendar className={"border-none"} onChange={onChange} value={value} />
    </div>
  );
};

export default Calender;
