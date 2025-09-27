import { ShoppingBagIcon, DollarSignIcon, BoxIcon, TruckIcon } from "lucide-react";
import { Metric, OrderStatus, Order, Product } from "@/features/auth/types/dashboard.types";

export const metrics: Metric[] = [
    {
        title: "Total Orders",
        value: "1,247",
        change: "+12.5% from last month",
        changeType: "up",
        icon: ShoppingBagIcon,
    },
    {
        title: "Monthly Income",
        value: "$45,670.5",
        change: "+8.2% from last month",
        changeType: "up",
        icon: DollarSignIcon,
    },
    {
        title: "Active Products",
        value: "156",
        change: "-2 from last month",
        changeType: "down",
        icon: BoxIcon,
    },
    {
        title: "Pending Deliveries",
        value: "23",
        change: "+5 from last month",
        changeType: "up",
        icon: TruckIcon,
    },
];

export const orderStatuses: OrderStatus[] = [
    { status: "PENDING", count: 15, color: "bg-yellow-200 text-yellow-800" },
    { status: "CONFIRMED", count: 45, color: "bg-blue-200 text-blue-800" },
    { status: "PREPARING", count: 12, color: "bg-orange-200 text-orange-800" },
    { status: "OUT FOR DELIVERY", count: 23, color: "bg-purple-200 text-purple-800" },
    { status: "DELIVERED", count: 1156, color: "bg-green-200 text-green-800" },
    { status: "CANCELLED", count: 8, color: "bg-red-200 text-red-800" },
];

export const recentOrders: Order[] = [
    { id: "ORD-001", status: "CONFIRMED", customer: "John Doe", date: "Jan 15, 2024 16:00", price: "$53.98" },
    { id: "ORD-002", status: "OUT FOR DELIVERY", customer: "Jane Smith", date: "Jan 15, 2024 14:45", price: "$19.98" },
];

export const topSellingProducts: Product[] = [
    { name: "Premium Coffee Beans", id: "COF-001", sales: "156 sales", price: "$24.99" },
    { name: "Organic Green Tea", id: "TEA-002", sales: "98 sales", price: "$18.5" },
    { name: "Wireless Headphones", id: "ELC-003", sales: "67 sales", price: "$199.99" },
];
