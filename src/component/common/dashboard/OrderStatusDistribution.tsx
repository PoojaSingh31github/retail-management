import { OrderStatus } from "@/features/auth/types/dashboard.types";

interface Props {
  status: OrderStatus;
}

const OrderStatusDistribution: React.FC<Props> = ({ status }) => {
  return (
    <li className="flex items-center justify-between">
      <span className={`rounded-full px-3 py-1 text-sm font-medium ${status.color}`}>
        {status.status}
      </span>
      <span className="text-sm font-semibold">{status.count}</span>
    </li>
  );
};

export default OrderStatusDistribution;
