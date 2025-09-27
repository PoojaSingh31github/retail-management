import React from 'react';
import { Save, Lock, Bell, Briefcase } from 'lucide-react';

interface CustomButtonProps {
    children: React.ReactNode;
    icon?: 'save' | 'change_password' | 'notify' | 'business';
    type?: 'submit' | 'button';
    onClick?: () => void;
}

const iconMap = {
    save: Save,
    change_password: Lock,
    notify: Bell,
    business: Briefcase,
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, icon = 'save', type = 'submit', onClick }) => {
    const IconComponent = iconMap[icon];
    
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex items-center space-x-2 cursor-pointer bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-md hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
            {IconComponent && <IconComponent className="h-5 w-5" />}
            <span>{children}</span>
        </button>
    );
};

export default CustomButton;
