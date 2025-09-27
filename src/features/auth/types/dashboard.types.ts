import { LucideIcon } from "lucide-react";

export interface Metric {
    title: string;
    value: string;
    change: string;
    changeType: "up" | "down";
    icon: LucideIcon;
}


export interface OrderStatus {
    status: string;
    count: number;
    color: string;
}

export interface Order {
    id: string;
    status: string;
    customer: string;
    date: string;
    price: string;
}

export interface Product {
    name: string;
    id: string;
    sales: string;
    price: string;
}
