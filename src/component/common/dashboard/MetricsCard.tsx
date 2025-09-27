import { Metric } from "@/features/auth/types/dashboard.types";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MetricsCardProps {
  metric: Metric;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ metric }) => {
  const Icon = metric.icon; 

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{metric.title}</h3>
        <div className="rounded-full bg-gray-200 p-2 text-gray-600">
          <Icon className="h-4 w-4 text-gray-400" /> {/* ✅ ab error nahi aayega */}
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold">{metric.value}</p>
      <div
        className={`mt-1 flex items-center text-xs font-semibold ${
          metric.changeType === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {metric.changeType === "up" ? (
          <ArrowUpIcon className="mr-1 h-3 w-3" />
        ) : (
          <ArrowDownIcon className="mr-1 h-3 w-3" />
        )}
        {metric.change}
      </div>
    </div>
  );
};

export default MetricsCard;
