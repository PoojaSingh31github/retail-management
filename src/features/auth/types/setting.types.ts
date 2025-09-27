export type BusinessCategory = 'Fashion & Apparel' | 'Electronics' | 'Food & Beverage' | 'Services';

export interface UserProfile {
    fullName: string;
    emailAddress: string;
}

export interface BusinessInfo {
    businessName: string;
    businessAddress: string;
    businessPhone: string;
    businessCategory: BusinessCategory;
}


export interface ProfileData {
    fullName: string;
    emailAddress: string;
}

export interface BusinessData {
    name: string;
    address: string;
    phone: string;
    category: BusinessCategory;
}

export interface NotificationSettings {
    orderUpdates: boolean;
    lowStockAlerts: boolean;
    securityAlerts: boolean;
}

