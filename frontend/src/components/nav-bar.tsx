"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@/ui/xmark-icon";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/transactions", label: "Transactions" },
  { href: "/dashboard/accounts", label: "Accounts" },
  { href: "/dashboard/investments", label: "Investments" },
  { href: "/dashboard/credit-cards", label: "Credit Cards" },
  { href: "/dashboard/loans", label: "Loans" },
  { href: "/dashboard/services", label: "Services" },
];

export const NavBar = ({ onSelect }: { onSelect: (label: string) => void }) => {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <div className="flex justify-end lg:hidden mb-2">
        <button
          aria-label="Close menu"
          onClick={() => onSelect("close")}
          className="p-2 text-gray-700 hover:text-gray-900"
        >
          <XMarkIcon color="black" />
        </button>
      </div>

      <ul className="space-y-2 lg:mt-5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname.endsWith(item.href)
              : pathname.includes(item.href); 
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-[18px] font-medium transition
                    ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                onClick={() => onSelect(item.label)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
