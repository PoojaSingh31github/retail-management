import { Product } from "@/app/(protected)/inventory/data/inventoryMockData";
import { ProductStatus } from "@/features/auth/types/inventory.types";
import { MoreHorizontal, Package } from "lucide-react";

const StockStatusBadge = ({ status }: { status: ProductStatus }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs rounded-full font-medium";
  if (status === 'good') {
    return <span className={`${baseClasses} bg-green-100 text-green-700`}>good</span>;
  }
  if (status === 'low') {
    return <span className={`${baseClasses} bg-orange-100 text-orange-700`}>low</span>;
  }
  return <span className={`${baseClasses} bg-red-100 text-red-700`}>out</span>;
};

const ProductTable = ({ products }: { products: Product[] }) => {
  const totalProducts = products.length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">Products ({totalProducts})</h2>
      <p className="text-sm text-gray-500 mb-6">Showing 1 to {totalProducts} of {totalProducts} products</p>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                {/* Product Name & Description */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="h-6 w-6 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.description}</div>
                    </div>
                  </div>
                </td>
                {/* Other columns */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{product.stock}</span>
                    <StockStatusBadge status={product.stockStatus} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.lastUpdated}</td>
                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-gray-900">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-4">Showing 1 to {totalProducts} of {totalProducts} results</p>
    </div>
  );
};

export default ProductTable;