"use client";

import NotificationSettings from "@/component/common/setting/NotificationSettings";
import BusinessSettingsForm from "@/component/form/BusinessSettingsForm";
import ProfileSettingsForm from "@/component/form/ProfileSettingsForm";
import SecuritySettingsForm from "@/component/form/SecuritySettingsForm";
import { Layout } from "@/component/layout/Main";
import { CustomTabs, TabItem } from "@/component/UI/CustomTabs";
import React, { useState } from "react";

type SettingTab = "Profile" | "Business" | "Security" | "Notifications";

const tabMap: Record<SettingTab, React.FC> = {
  Profile: ProfileSettingsForm,
  Business: BusinessSettingsForm,
  Security: SecuritySettingsForm,
  Notifications: NotificationSettings,
};

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingTab>("Profile");
  const ActiveComponent = tabMap[activeTab];

  const tabs: TabItem<SettingTab>[] = [
    { key: "Profile", label: "Profile" },
    { key: "Business", label: "Business" },
    { key: "Security", label: "Security" },
    { key: "Notifications", label: "Notifications" },
  ];

  return (
    <Layout>
      <div className="p-6 bg-[#F9FAFB] min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">
            Manage your account and application preferences
          </p>
        </div>
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <ActiveComponent />
      </div>
    </Layout>
  );
};

export default SettingsPage;
