import { Order, OrderStatus } from "@/features/auth/types/dashboard.types";
import React, { FC } from "react";

interface Props {
  order: Order;
  orderStatuses?: OrderStatus[]; // optional banaya
}

const RecentOrders: FC<Props> = ({ order, orderStatuses = [] }) => {
  // safe check using default empty array
  const statusColor = orderStatuses.find(s => s.status === order.status)?.color || "bg-gray-200 text-gray-800";

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
      <div>
        <h4 className="font-medium">{order.id}</h4>
        <p className="text-xs text-gray-500">{order.customer}</p>
        <p className="text-xs text-gray-400">{order.date}</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusColor}`}>
          {order.status}
        </span>
        <span className="font-semibold">{order.price}</span>
      </div>
    </div>
  );
};

export default RecentOrders;
