import { Search, SlidersHorizontal } from "lucide-react";

const OrderFilters = () => {
  return (
    <div className="p-6 rounded-lg shadow-sm mb-8 ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters & Search</h2>

      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Search Input */}
        <div className="col-span-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border  border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="col-span-2 relative">
          <select
            className="appearance-none w-full px-4 py-2 border  border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer pr-8"
            defaultValue="All Status"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Out For Delivery</option>
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            ▾
          </span>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4">
          <button className="flex w-full items-center text-sm font-medium text-gray-600  hover:text-gray-800 px-3 py-2 border border-gray-300 rounded-md transition-colors">
            <SlidersHorizontal className="h-4 w-4 mr-1" /> More Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFilters;
