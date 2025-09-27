// app/inventory/page.tsx
"use client";
import FiltersAndSearch from "@/component/common/inventory/FiltersAndSearch";
import LowStockAlert from "@/component/common/inventory/LowStockAlert";
import ProductTable from "@/component/common/inventory/ProductTable";
import { Plus } from "lucide-react";
import { products } from "./data/inventoryMockData";
import { Layout } from "@/component/layout/Main";

const InventoryPage = () => {
  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
            <p className="text-gray-500">Manage your product inventory and stock levels</p>
          </div>
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5 mr-1" /> Add Product
          </button>
        </div>

        <LowStockAlert />
        <FiltersAndSearch />
        <ProductTable products={products} />
      </div>
    </Layout>
  );
};

export default InventoryPage;