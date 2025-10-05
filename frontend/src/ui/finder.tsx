"use client";

import React from "react";

interface FinderIconProps {
  size?: number;
  color?: string;
}

export const FinderIcon: React.FC<FinderIconProps> = ({
  size = 24,
  color = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-5.2-5.2m1.4-4.8a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
