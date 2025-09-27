import { deliveryMetrics, Metric } from "@/app/(protected)/delivery/data/deliveryMockData";
import { Clock, Truck, Users } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  clock: Clock,
  truck: Truck,
  users: Users,
};

const MetricCard = ({ metric }: { metric: Metric }) => {
  const IconComponent = iconMap[metric.icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 border border-gray-100 min-h-[120px]">
      <div className={`p-3 rounded-full bg-gray-50 ${metric.color}`}>
        {IconComponent && <IconComponent className="h-6 w-6" />}
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">{metric.count}</p>
        <p className="text-sm font-medium text-gray-500 mt-1">{metric.title}</p>
      </div>
    </div>
  );
};

const DeliveryMetrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {deliveryMetrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
};

export default DeliveryMetrics;