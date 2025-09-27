export type BusinessCategory = "Fashion & Apparel" | "Electronics" | "Food & Beverage" | "Services";

export interface BusinessData {
  name: string;
  address: string;
  phone: string;
  category: BusinessCategory;
}

export interface ProfileData {
  fullName: string;
  emailAddress: string;
}

export interface NotificationSettings {
  orderUpdates: boolean;
  lowStockAlerts: boolean;
  securityAlerts: boolean;
}

export interface SecurityData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
