"use client";
import { TransactionProps } from "@/types/transaction";
import { DefaultIcon } from "@/ui/default-transaction-icon";
import { DollarIcon } from "@/ui/dollar-icon";
import { PaypalIcon } from "@/ui/paypal-icon";
import { WalletIcon } from "@/ui/wallet-icon";
import React from "react";


export const Transaction: React.FC<TransactionProps> = ({
  title,
  date,
  amount,
  type,
  icon,
}) => {
  const Icon =
    icon === "wallet"
      ? WalletIcon
      : icon === "paypal"
      ? PaypalIcon
      : icon === "dollar"
      ? DollarIcon
      : DefaultIcon;

  const formattedAmount =
    (type === "expense" ? "-" : "+") +
    "$" +
    Math.abs(amount).toLocaleString();

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Icon />
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
      <p
        className={`font-semibold ${
          type === "expense" ? "text-red-500" : "text-green-500"
        }`}
      >
        {formattedAmount}
      </p>
    </div>
  );
};
