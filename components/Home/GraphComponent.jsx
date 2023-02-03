import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const pdata = [
  {
    name: "Apr",
    student: 200,
    fees: 100,
  },
  {
    name: "May",
    student: 100,
    fees: 300,
  },
  {
    name: "Jun",
    student: 300,
    fees: 200,
  },
  {
    name: "Jul",
    student: 500,
    fees: 100,
  },
  {
    name: "Aug",
    student: 200,
    fees: 500,
  },
  {
    name: "Sept",
    student: 100,
    fees: 400,
  },
  {
    name: "Oct",
    student: 300,
    fees: 200,
  },
  {
    name: "Nov",
    student: 100,
    fees: 300,
  },
  {
    name: "Dec",
    student: 300,
    fees: 100,
  },
];

const GraphComponent = () => {
  return (
    <div className="bg-white drop-shadow-lg w-full h-[60vh] rounded-lg flex flex-col py-5">
      <h1 className="mx-8 mb-10 text-[#67748E]">Assets & Liabilities</h1>
      <ResponsiveContainer width="100%">
        <LineChart data={pdata}>
          <Line
            type="monotone"
            dataKey="student"
            stroke="#82D616"
            strokeWidth={3}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="#FF8540"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex items-center">
        <div className=" ml-8 w-10 h-1 bg-[#82D616]"></div>
        <p className="ml-3 font-light">Assets</p>
        <div className="ml-8 w-10 h-1 bg-[#FF8540]"></div>
        <p className="ml-3 font-light">Liability</p>
      </div>
    </div>
  );
};

export default GraphComponent;
