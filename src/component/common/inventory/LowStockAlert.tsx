import { AlertTriangle, Package } from "lucide-react";

const LowStockAlert = () => {
  // Note: In a real app, you'd calculate these values from your product list
  const lowStockCount = 1; 
  const lowStockProduct = { name: "Organic Green Tea", stock: 5 };

  if (lowStockCount === 0) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
        <div>
          <h3 className="font-semibold text-sm text-yellow-800">Low Stock Alert</h3>
          <p className="text-sm text-yellow-700">
            {lowStockCount} product(s) are running low on stock
          </p>
          <div className="mt-3 flex items-center justify-between bg-white p-3 rounded-md border border-yellow-100">
            <div className="flex items-center space-x-2 text-sm">
              <Package className="h-4 w-4 text-orange-500" />
              <span className="font-medium text-gray-800">{lowStockProduct.name}</span>
              <span className="text-sm px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">
                {lowStockProduct.stock} left
              </span>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Restock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowStockAlert;