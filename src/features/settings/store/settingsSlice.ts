import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusinessData, ProfileData, NotificationSettings, SecurityData } from "../types/settings.types";

interface SettingsState {
  business: BusinessData;
  profile: ProfileData;
  notifications: NotificationSettings;
  security: SecurityData;
}

const initialState: SettingsState = {
  business: { name: "", address: "", phone: "", category: "Fashion & Apparel" },
  profile: { fullName: "", emailAddress: "" },
  notifications: { orderUpdates: true, lowStockAlerts: true, securityAlerts: true },
  security: { currentPassword: "", newPassword: "", confirmNewPassword: "" },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateBusiness(state, action: PayloadAction<BusinessData>) {
      state.business = action.payload;
    },
    updateProfile(state, action: PayloadAction<ProfileData>) {
      state.profile = action.payload;
    },
    updateNotifications(state, action: PayloadAction<NotificationSettings>) {
      state.notifications = action.payload;
    },
    updateSecurity(state, action: PayloadAction<SecurityData>) {
      state.security = action.payload;
    },
  },
});

export const { updateBusiness, updateProfile, updateNotifications, updateSecurity } = settingsSlice.actions;
export default settingsSlice.reducer;
