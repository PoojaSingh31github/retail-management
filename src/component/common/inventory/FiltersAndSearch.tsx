import { Search, Filter } from "lucide-react";

const FilterDropdown = ({ title }: { title: string }) => (
  <button className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
    {title}
    <span className="ml-2">▾</span>
  </button>
);

const FiltersAndSearch = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filters & Search</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800">
            <Filter className="h-4 w-4 mr-1" /> Show Advanced Filters
          </button>
          <button className="text-sm font-medium text-red-600 hover:text-red-700">
            Clear All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Search Input */}
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Dropdowns */}
        <FilterDropdown title="All Categories" />
        <FilterDropdown title="All Status" />
        <FilterDropdown title="10 per page" />
      </div>
    </div>
  );
};

export default FiltersAndSearch;