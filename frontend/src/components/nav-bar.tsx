"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/investments", label: "Investments" },
  { href: "/credit-cards", label: "Credit Cards" },
  { href: "/loans", label: "Loans" },
  { href: "/services", label: "Services" },
];

export const NavBar = ({ onSelect }: { onSelect: (label: string) => void }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="p-4">
        <ul className="space-y-2 lg:mt-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition
                  ${
                    pathname === item.href
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                onClick={() => onSelect(item.label)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
