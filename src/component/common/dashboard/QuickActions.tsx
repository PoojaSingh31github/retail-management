import { ClipboardListIcon, LayoutDashboardIcon, PlusIcon, TruckIcon as DeliveryTruckIcon } from "lucide-react";

const QuickActions = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <p className="text-sm text-gray-500">Common tasks and shortcuts</p>
      <ul className="mt-4 space-y-2">
        <li>
          <button className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add New Product
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
            <ClipboardListIcon className="mr-2 h-4 w-4" />
            View All Orders
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
            <DeliveryTruckIcon className="mr-2 h-4 w-4" />
            Manage Deliveries
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            View Customers
          </button>
        </li>
      </ul>
    </div>
  );
};

export default QuickActions;
