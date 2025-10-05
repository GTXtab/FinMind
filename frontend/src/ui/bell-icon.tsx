"use client";

import React from "react";

interface BellIconProps {
  size?: number;
  color?: string;
}

export const BellIcon: React.FC<BellIconProps> = ({
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.965 8.965 0 0 1 18 9.75V8.25a6 6 0 1 0-12 0v1.5a8.966 8.966 0 0 1-2.31 6.022 23.853 23.853 0 0 0 5.454 1.31m5.713 0a24.255 24.255 0 0 1-5.713 0m5.713 0a3 3 0 1 1-5.713 0"
      />
    </svg>
  );
};
