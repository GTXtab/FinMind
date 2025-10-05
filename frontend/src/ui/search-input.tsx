"use client";

import React from "react";
import { FinderIcon } from "./finder";

interface BurgerIconProps {
  size?: number;
  color?: string;
}

export const SearchInput: React.FC<BurgerIconProps> = ({}) => {
  return (
    <div className="relative max-w-screen-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search for something"
        className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F7F9FC] text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <FinderIcon />
    </div>
  );
};
