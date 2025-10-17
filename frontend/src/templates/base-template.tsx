"use client";
import { useState, useEffect, useMemo } from "react";
import { NavBar } from "@/components/nav-bar";
import { BurgerIcon } from "@/ui/burger-menu";
import { XMarkIcon } from "@/ui/xmark-icon";
import { SearchInput } from "@/ui/search-input";
import { UserAvatar } from "@clerk/nextjs";
import { BellIcon } from "@/ui/bell-icon";
import { Cog6ToothIcon } from "@/ui/tooth-icon";
import { usePathname } from "next/navigation";

export const BaseTemplate = (props: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const pathname = usePathname();

  const title = useMemo(() => {
    if (pathname.includes("/dashboard/transactions")) return "Transactions";
    if (pathname.includes("/dashboard/accounts")) return "Accounts";
    if (pathname.includes("/dashboard/settings")) return "Settings";
    return "Overview";
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen flex text-gray-700 antialiased">
      {(menuOpen || isDesktop) && (
        <aside
          className={`fixed lg:static top-[72px] lg:top-0 left-0 w-64 bg-white border-r border-gray-200 shadow-md lg:shadow-none lg:h-screen transition-transform duration-300 z-40`}
        >
          {isDesktop && (
            <h1 className="text-4xl mt-3 ml-6 font-extrabold tracking-tight text-[#273469] select-none">
              Fin<span className="text-blue-600">Mind</span>
            </h1>
          )}
          <NavBar
            onSelect={() => {
              if (!isDesktop) setMenuOpen(false);
            }}
          />
        </aside>
      )}

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            {!isDesktop && (
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                {menuOpen ? (
                  <XMarkIcon color="black" />
                ) : (
                  <BurgerIcon color="black" />
                )}
              </button>
            )}

            <h1 className="text-2xl font-semibold text-[#273469]">{title}</h1>

            {isDesktop ? (
              <div className="flex items-center gap-4">
                <button
                  aria-label="Settings"
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Cog6ToothIcon />
                </button>
                <button
                  aria-label="Notifications"
                  className="relative p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <BellIcon />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <UserAvatar />
              </div>
            ) : (
              <UserAvatar />
            )}
          </div>

          {!isDesktop && (
            <div className="w-full">
              <SearchInput />
            </div>
          )}

          {isDesktop && (
            <div className="flex">
              <div className="max-w-md w-full">
                <SearchInput />
              </div>
            </div>
          )}
        </header>

        <main className="flex-1 p-6">{props.children}</main>
      </div>
    </div>
  );
};
