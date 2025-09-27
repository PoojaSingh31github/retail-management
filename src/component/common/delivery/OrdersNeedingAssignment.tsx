// components/delivery/OrdersNeedingAssignment.tsx
// import { ordersNeedingAssignment, deliveryAgents, AssignmentOrder } from "@/app/delivery/data/deliveryMockData";
import { ordersNeedingAssignment, deliveryAgents, AssignmentOrder } from "@/app/(protected)/delivery/data/deliveryMockData";
import { MapPin, ChevronDown } from "lucide-react";

const AssignmentItem = ({ order, agents }: { order: AssignmentOrder, agents: any[] }) => {
  const statusClasses = "bg-blue-100 text-blue-700"; 

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        {/* Order Info */}
        <div className="min-w-[120px]">
          <div className="text-sm font-semibold text-gray-900">{order.id}</div>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusClasses}`}>
            {order.status}
          </span>
        </div>
        
        {/* Customer & Address */}
        <div className="min-w-[150px]">
          <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
          <div className="text-xs text-gray-500">{order.customerEmail}</div>
        </div>
        
        {/* Location */}
        <div className="flex items-center space-x-1 text-sm text-gray-600 min-w-[200px]">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span>{order.address}</span>
        </div>
        
        {/* Total & Items */}
        <div className="text-sm font-semibold text-gray-900 min-w-[100px]">
          ${order.total.toFixed(2)}
          <div className="text-xs text-gray-500 font-normal">{order.itemsCount} item(s)</div>
        </div>
      </div>
      
      {/* Assign Agent Dropdown */}
      <div className="relative">
        <select
          className="appearance-none px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 pr-8 focus:ring-blue-500 focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>Assign Agent</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id} disabled={agent.status === 'Busy'}>
              {agent.name} {agent.status === 'Available' ? '(Available)' : '(Busy)'}
            </option>
          ))}
        </select>
        <ChevronDown className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
      </div>
    </div>
  );
};

const OrdersNeedingAssignment = () => {
  const orders = ordersNeedingAssignment; 
  const agents = deliveryAgents;
  
  if (orders.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Orders Needing Delivery Assignment</h2>
      <p className="text-sm text-gray-500 mb-4">{orders.length} orders ready for delivery assignment</p>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <AssignmentItem key={order.id} order={order} agents={agents} />
        ))}
      </div>
    </div>
  );
};

export default OrdersNeedingAssignment;