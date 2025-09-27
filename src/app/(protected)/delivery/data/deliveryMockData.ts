// data/deliveryMockData.ts
export type AgentStatus = 'Available' | 'Busy';
export type OrderStatus = 'CONFIRMED' | 'OUT_FOR_DELIVERY';

export interface Metric {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

export interface Agent {
  id: string;
  name: string;
  phone: string;
  status: AgentStatus;
  currentOrders: number;
}

export interface AssignmentOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  address: string;
  total: number;
  itemsCount: number;
}

export interface OutForDeliveryOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  address: string;
  agent: string;
  estimatedDelivery: string;
  status: OrderStatus;
}

export const deliveryMetrics: Metric[] = [
  { title: "Pending Assignment", count: 1, icon: 'clock', color: "text-orange-500" },
  { title: "Out for Delivery", count: 1, icon: 'truck', color: "text-purple-600" },
  { title: "Available Agents", count: 2, icon: 'users', color: "text-green-600" },
  { title: "Total Agents", count: 3, icon: 'users', color: "text-blue-600" },
];

export const deliveryAgents: Agent[] = [
  { id: "A-001", name: "Mike Johnson", phone: "+1-555-0201", status: "Available", currentOrders: 2 },
  { id: "A-002", name: "Sarah Wilson", phone: "+1-555-0202", status: "Available", currentOrders: 1 },
  { id: "A-003", name: "David Brown", phone: "+1-555-0203", status: "Busy", currentOrders: 0 },
];

export const ordersNeedingAssignment: AssignmentOrder[] = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    status: "CONFIRMED",
    address: "123 Main St, City, State 12345",
    total: 53.98,
    itemsCount: 1,
  },
];

export const ordersOutForDelivery: OutForDeliveryOrder[] = [
  {
    id: "ORD-002",
    customerName: "Jane Smith",
    customerPhone: "+1-555-0124",
    address: "456 Oak Ave, City, State 12345",
    agent: "Agent-002",
    estimatedDelivery: "Jan 15, 21:30",
    status: "OUT_FOR_DELIVERY",
  },
];