// import { OrderMetric, orderMetrics } from "@/app/order/data/ordersMockData";

import { OrderMetric, orderMetrics } from "@/app/(protected)/order/data/ordersMockData";

const MetricCard = ({ metric }: { metric: OrderMetric }) => {
  const countClasses = `text-4xl font-bold ${metric.color}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center border border-gray-100 min-h-[120px]">
      <p className={countClasses}>{metric.count}</p>
      <p className="text-sm font-medium text-gray-500 mt-1">{metric.title}</p>
    </div>
  );
};

const OrderMetrics = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
      {orderMetrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
};

export default OrderMetrics;