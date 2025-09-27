"use client";

import { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "@/libs/utils/storage";

const STORAGE_KEY = "userSettings";

export interface UserSettings {
  profile: {
    fullName: string;
    emailAddress: string;
  };
  business: {
    name: string;
    address: string;
    phone: string;
    category: string;
  };
  security: {
    currentPassword: string;
    newPassword: string;
  };
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

const defaultSettings: UserSettings = {
  profile: { fullName: "", emailAddress: "" },
  business: { name: "", address: "", phone: "", category: "Fashion & Apparel" },
  security: { currentPassword: "", newPassword: "" },
  notifications: { email: true, sms: false, push: true },
};

export function useUserSettings() {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);

  useEffect(() => {
    const saved = getFromLocalStorage(STORAGE_KEY);
    if (saved) setSettings(saved);
  }, []);

  const updateSettings = (section: keyof UserSettings, data: any) => {
    const newSettings = { ...settings, [section]: { ...settings[section], ...data } };
    setSettings(newSettings);
    saveToLocalStorage(STORAGE_KEY, newSettings);
  };

  const resetPassword = (newPassword: string) => {
    const newSettings = { ...settings, security: { ...settings.security, newPassword } };
    setSettings(newSettings);
    saveToLocalStorage(STORAGE_KEY, newSettings);
  };

  return { settings, updateSettings, resetPassword };
}
