"use client";

import React, { useState } from "react";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  position: string;
  avatar: string;
}

interface AccountTransferListProps {
  users: User[];
}

export const AccountTransferList: React.FC<AccountTransferListProps> = ({
  users,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const visibleUsers = users.slice(startIndex, startIndex + visibleCount);

  const handleNext = () => {
    const nextIndex = startIndex + visibleCount;
    if (nextIndex >= users.length) {
      setStartIndex(0); 
    } else {
      setStartIndex(nextIndex);
    }
  };

  return (
    <div className="flex items-center justify-between mb-5">
      {visibleUsers.map((user) => (
        <div key={user.id} className="flex flex-col items-center gap-1">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={user.avatar}
              alt={user.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-sm font-medium text-[#1C1E53]">{user.name}</h3>
          <p className="text-xs text-blue-500">{user.position}</p>
        </div>
      ))}

      <button onClick={handleNext} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
        <span className="text-lg">›</span>
      </button>
    </div>
  );
};
