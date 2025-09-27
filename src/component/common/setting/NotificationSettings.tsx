"use client";
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { NotificationSettings as NotificationStateType } from '@/features/auth/types/setting.types';
import CustomButton from '@/component/UI/CustomButton';

const initialNotifications: NotificationStateType = {
    orderUpdates: true,
    lowStockAlerts: true,
    securityAlerts: true,
};

const NotificationSettings: React.FC = () => {
    const [settings, setSettings] = useState<NotificationStateType>(initialNotifications);

    const toggleSetting = (key: keyof NotificationStateType) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        console.log('Notification Settings Saved:', settings);
        alert('Notification settings updated successfully!');
    };

    const SettingToggle = ({ label, description, state, onToggle }: { label: string, description: string, state: boolean, onToggle: () => void }) => (
        <div className="flex justify-between items-center w-full">
            <div>
                <p className="font-medium text-sm text-black">{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <button
                onClick={onToggle}
                className={`relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full transition-colors focus:outline-none ${state ? 'bg-black' : 'bg-gray-200'}`}
                aria-checked={state}
                role="switch"
            >
                <span
                    className={`${state ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
            </button>
        </div>
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
                <Bell className="h-6 w-6 text-gray-700" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
                    <p className="text-sm text-gray-500">Decide how and when you receive notifications</p>
                </div>
            </div>
            <div className="space-y-4">
                <SettingToggle
                    label="Order Updates"
                    description="Receive an email when a new order is placed or status changes."
                    state={settings.orderUpdates}
                    onToggle={() => toggleSetting('orderUpdates')}
                />
                <SettingToggle
                    label="Low Stock Alerts"
                    description="Get notified when a product inventory drops below a threshold."
                    state={settings.lowStockAlerts}
                    onToggle={() => toggleSetting('lowStockAlerts')}
                />
                <SettingToggle
                    label="Order Updates"
                    description="Receive an email when a new order is placed or status changes."
                    state={settings.orderUpdates}
                    onToggle={() => toggleSetting('orderUpdates')}
                />
                <SettingToggle
                    label="Low Stock Alerts"
                    description="Get notified when a product inventory drops below a threshold."
                    state={settings.lowStockAlerts}
                    onToggle={() => toggleSetting('lowStockAlerts')}
                />
                <SettingToggle
                    label="Security Alerts"
                    description="Alerts for unusual account activity or sign-ins from new devices."
                    state={settings.securityAlerts}
                    onToggle={() => toggleSetting('securityAlerts')}
                />
            </div>

            <div className="mt-8">
                <CustomButton icon="notify" onClick={handleSave} type="button">Save Notifications</CustomButton>
            </div>
        </div>
    );
};

export default NotificationSettings;
