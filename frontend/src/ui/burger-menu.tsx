"use client";

import React from "react";

interface BurgerIconProps {
  size?: number;
  color?: string;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({
  size = 24,
  color = "black",
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};
