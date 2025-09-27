// components/orders/OrdersTable.tsx
import { OrderStatus,Order } from "@/app/order/data/ordersMockData";
import { MoreHorizontal, ArrowDownUp } from "lucide-react";
// import { Order,  OrderStatus } from "";

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const baseClasses = "px-3 py-1 text-xs rounded-full font-semibold";
  let colorClasses = "";

  switch (status) {
    case 'Confirmed':
      colorClasses = "bg-blue-100 text-blue-700";
      break;
    case 'Out For Delivery':
      colorClasses = "bg-purple-100 text-purple-700";
      break;
    case 'Pending':
      colorClasses = "bg-yellow-100 text-yellow-700";
      break;
    case 'Delivered':
      colorClasses = "bg-green-100 text-green-700";
      break;
    default:
      colorClasses = "bg-gray-100 text-gray-700";
  }

  return <span className={`${baseClasses} ${colorClasses}`}>{status.toUpperCase()}</span>;
};

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const totalOrders = orders.length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">Orders ({totalOrders})</h2>
      <p className="text-sm text-gray-500 mb-6">Showing {totalOrders} of {totalOrders} orders</p>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Agent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                Date <ArrowDownUp className="h-3 w-3 ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                  <div className="text-xs text-gray-500">{order.customerEmail}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.itemsCount} item(s)</div>
                    <div className="text-xs text-gray-500">{order.itemSummary}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.deliveryAgent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="text-sm text-gray-900">{order.date}</div>
                    <div className="text-xs text-gray-500">{order.time}</div>
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

export default OrdersTable;