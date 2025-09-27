export type OrderStatus = 'Pending' | 'Confirmed' | 'Preparing' | 'Out For Delivery' | 'Delivered' | 'Cancelled';

export interface OrderMetric {
  title: string;
  count: number;
  color: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  itemsCount: number;
  itemSummary: string;
  total: number;
  status: OrderStatus;
  deliveryAgent: string;
  date: string;
  time: string;
}

export const orderMetrics: OrderMetric[] = [
  { title: "Total", count: 2, color: "text-gray-900" },
  { title: "Pending", count: 0, color: "text-yellow-600" },
  { title: "Confirmed", count: 1, color: "text-blue-600" },
  { title: "Preparing", count: 0, color: "text-orange-600" },
  { title: "Out for Delivery", count: 1, color: "text-purple-600" },
  { title: "Delivered", count: 0, color: "text-green-600" },
  { title: "Cancelled", count: 0, color: "text-red-600" },
];

export const orders: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    itemsCount: 1,
    itemSummary: "Premium Coffee Beans",
    total: 53.98,
    status: "Confirmed",
    deliveryAgent: "Agent-001",
    date: "Jan 15, 2024",
    time: "16:00",
  },
  {
    id: "ORD-002",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    itemsCount: 1,
    itemSummary: "Organic Green Tea",
    total: 19.98,
    status: "Out For Delivery",
    deliveryAgent: "Agent-002",
    date: "Jan 15, 2024",
    time: "14:45",
  },
];