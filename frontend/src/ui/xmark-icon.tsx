import React from "react";

export const XMarkIcon = ({
  color = "black",
  size = 24,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);
