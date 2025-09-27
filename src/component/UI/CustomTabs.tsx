"use client";

import React from "react";
export type TabItem<T extends string> = {
  key: T;
  label: string;
};

type CustomTabsProps<T extends string> = {
  tabs: TabItem<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
};

export function CustomTabs<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: CustomTabsProps<T>) {
  return (
    <div className="bg-[#F5F5F5] p-[2px] grid grid-cols-4 rounded-xl mb-8 border border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-6 py-1 m-[1px] rounded-lg text-sm font-semibold cursor-pointer transition-colors
            ${activeTab === tab.key
              ? "bg-[#FFFFFF] text-black shadow-md"
              : "text-gray-700 hover:bg-gray-50"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
