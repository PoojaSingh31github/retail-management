"use client";

import { Search, Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  // Map routes to titles
  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/inventory": "Inventory Management",
    "/order": "Orders Management",
    "/delivery": "Orders Management",
    "/setting": "Settings",
  };

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <div className="flex items-center space-x-4">
          <button  className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button  className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button  className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
