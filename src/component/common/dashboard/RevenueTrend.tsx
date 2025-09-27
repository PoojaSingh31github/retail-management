import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 35000 },
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 45000 },
  { month: "May", revenue: 52000 },
  { month: "Jun", revenue: 48000 },
];

const RevenueTrend = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Revenue Trend</h2>
      <p className="text-sm text-gray-500">Monthly revenue for the past 6 months</p>
      <div className="mt-4 h-[230px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTrend;
