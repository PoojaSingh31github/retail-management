import {ordersOutForDelivery, OutForDeliveryOrder, OrderStatus } from "@/app/(protected)/delivery/data/deliveryMockData";
import { MoreHorizontal } from "lucide-react";

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const baseClasses = "px-3 py-1 text-xs rounded-full font-semibold";
  const colorClasses = status === 'OUT_FOR_DELIVERY' 
    ? "bg-purple-100 text-purple-700" 
    : "bg-gray-100 text-gray-700";

  return <span className={`${baseClasses} ${colorClasses}`}>{status.replace(/_/g, ' ').toUpperCase()}</span>;
};

const OrdersOutForDelivery = ({ orders }: { orders: OutForDeliveryOrder[] }) => {
  const totalOrders = orders.length;
  
  if (totalOrders === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Orders Out for Delivery</h2>
      <p className="text-sm text-gray-500 mb-6">{totalOrders} orders currently being delivered</p>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Delivery</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                  <div className="text-xs text-gray-500">{order.customerPhone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.agent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.estimatedDelivery}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-gray-900 p-1">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersOutForDelivery;