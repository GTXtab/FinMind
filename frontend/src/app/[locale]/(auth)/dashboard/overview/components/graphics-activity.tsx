"use client";
import { WeeklyActivityData } from "@/utils/Data";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const WeeklyActivity: React.FC = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={WeeklyActivityData} barGap={6}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              borderRadius: "8px",
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ top: -10 }}
          />
          <Bar
            dataKey="deposit"
            fill="#14B8A6"
            radius={[4, 4, 0, 0]}
            name="Deposit"
          />
          <Bar
            dataKey="withdraw"
            fill="#F472B6"
            radius={[4, 4, 0, 0]}
            name="Withdraw"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
