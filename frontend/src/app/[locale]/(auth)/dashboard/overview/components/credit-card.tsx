"use client";
import { CardChipIcon } from "@/ui/chip-icon";
import React, { useState } from "react";

interface CreditCardProps {
  balance: number;
  holder: string;
  validThru: string;
  number: string;
  color?: string;
  cvv: string;
  bankName?: string;
  website?: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  holder,
  validThru,
  number,
  color = "from-indigo-500 to-blue-500",
  cvv,
  bankName = "FinMind Bank",
  website = "www.finmind.com",
}) => {
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    new Array(number.length).fill(false)
  );

  const handleClickGroup = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    const anyHidden = revealed.some((r) => !r);

    setRevealed(new Array(number.length).fill(anyHidden));
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`relative w-[280px] h-[170px] rounded-xl text-white cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${
        flipped ? "[transform:rotateY(180deg)]" : ""
      }`}
    >
      {/* Front */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-tr ${color} p-5 flex flex-col justify-between backface-hidden`}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-80">Balance</p>
            <h2 className="text-2xl font-bold">${balance.toLocaleString()}</h2>
          </div>
          <CardChipIcon size={40} color="#fff" />
        </div>

        <div>
          <div className="flex justify-between text-xs opacity-80 mt-3">
            <span>CARD HOLDER</span>
            <span>VALID THRU</span>
          </div>
          <div className="flex justify-between mt-1 text-sm font-medium">
            <span>{holder}</span>
            <span>{validThru}</span>
          </div>
          <p className="text-lg mt-2 tracking-widest cursor-pointer">
            {number.match(/.{1,4}/g)?.map((group, idx) => (
              <span key={idx} onClick={(e) => handleClickGroup(e)}>
                {revealed[idx] ? group : "****"}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between backface-hidden [transform:rotateY(180deg)]"
        style={{
          background: "linear-gradient(135deg, #0066FF 0%, #4C00FF 100%)",
        }}
      >
        <div className="w-full h-10 bg-black/60 rounded mt-2" />

        <div className="flex flex-col gap-2 mt-6">
          <p className="text-sm opacity-70">Authorized Signature</p>
          <div className="w-full h-8 bg-white/80 rounded flex justify-end pr-4 items-center text-black font-semibold">
            {cvv}
          </div>
        </div>

        <div className="flex justify-between items-end text-sm">
          <p className="opacity-70">{bankName}</p>
          <p className="opacity-70">{website}</p>
        </div>
      </div>
    </div>
  );
};
