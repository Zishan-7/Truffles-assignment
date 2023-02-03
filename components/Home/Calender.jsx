import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';

const Calender = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="w-full">
    <Calendar style={{"width":"100%"}} onChange={onChange} value={value} />
  </div>
  )
}

export default Calender