"use client";

import { AccountTransferList } from "@/ui/account-transfer";
import { QuickTransferUsers } from "@/utils/Data";
import React, { useState } from "react";

export const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    if (!amount) return alert("Enter amount");
    alert(`Sent ${amount}$ successfully!`);
  };

  return (
    <>
      <AccountTransferList users={QuickTransferUsers} />

      <div className="flex items-center bg-[#F5F7FB] rounded-full overflow-hidden">
        <input
          type="number"
          placeholder="Write Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 bg-transparent text-[#2D2F55] text-sm pl-5 py-3 focus:outline-none placeholder:text-[#AAB1C4]"
        />
        <button
          onClick={handleSend}
          className="flex items-center gap-2 bg-[#2F49D1] hover:bg-[#1E36B8] text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
        >
          Send
        </button>
      </div>
    </>
  );
};
