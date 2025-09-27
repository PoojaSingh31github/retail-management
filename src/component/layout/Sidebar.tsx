"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ListOrdered,
  Truck,
  Settings,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "Orders",
    href: "/order",
    icon: <ListOrdered className="h-5 w-5" />,
  },
  {
    name: "Deliveries",
    href: "/delivery",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/setting",
    icon: <Settings className="h-5 w-5" />,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [user, setUser] = useState<{
    name: string;
    businessName: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("signupFlowData");
      if (userData) {
        const parsed = JSON.parse(userData);
        setUser({
          name: parsed.formData?.fullName || "User",
          businessName: parsed.formData?.businessName || "Company Name",
        });
      }
    }
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-20">
      <div className="p-4 border-b border-gray-200 shadow-xs">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Retailer Panel
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-start p-4 space-x-4 cursor-pointer border-b border-gray-200 shadow-xs">
        <div className="h-8 w-8 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1447E6] font-semibold">
          {user?.name ? user.name.charAt(0) : "PS"}
        </div>
        <div className="text-sm font-medium text-gray-700 hidden sm:inline">
          <div>{user?.name || "Pooja Singh"}</div>
          <div>{user?.businessName || "Company Name"}</div>
        </div>
      </div>

      <nav className="mt-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 p-3 mx-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Logout at bottom */}
        <div className="absolute bottom-0 w-full">
          <div
            onClick={logout}
            className="flex items-center justify-start p-4 space-x-4 cursor-pointer border-y border-gray-200 shadow-xs hover:bg-gray-100 transition"
          >
            <div className="text-lg font-semibold text-gray-900 flex items-center space-x-4 gap-3">
              <LogOut />
              Sign Out
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
