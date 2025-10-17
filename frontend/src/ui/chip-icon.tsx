import React from "react";

interface CardChipIconProps {
  size?: number;
  color?: string;
}

export const CardChipIcon: React.FC<CardChipIconProps> = ({
  size = 40,
  color = "#ffffff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 48"
    width={size}
    height={(size * 48) / 64}
    fill="none"
  >
    <rect
      x="2"
      y="2"
      width="60"
      height="44"
      rx="6"
      ry="6"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 2v44M46 2v44M2 24h60"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="26"
      y="16"
      width="12"
      height="16"
      rx="2"
      ry="2"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
