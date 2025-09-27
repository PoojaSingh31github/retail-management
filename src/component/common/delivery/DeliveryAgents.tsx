// components/delivery/DeliveryAgents.tsx
import { Agent, deliveryAgents } from "@/app/(protected)/delivery/data/deliveryMockData";
import { User } from "lucide-react";
// import { deliveryAgents, Agent } from "@/data/deliveryMockData";

const AgentCard = ({ agent }: { agent: Agent }) => {
  const statusClasses = agent.status === 'Available' 
    ? "bg-green-100 text-green-700" 
    : "bg-red-100 text-red-700";

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-gray-500" />
          <span className="font-semibold text-gray-800">{agent.name}</span>
        </div>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClasses}`}>
          {agent.status}
        </span>
      </div>
      <p className="text-sm text-gray-500">{agent.phone}</p>
      <p className="text-sm text-gray-500">Current Orders: {agent.currentOrders}</p>
    </div>
  );
};

const DeliveryAgents = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Agents</h2>
      <p className="text-sm text-gray-500 mb-4">Available delivery personnel</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deliveryAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default DeliveryAgents;