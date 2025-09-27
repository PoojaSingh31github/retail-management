// inventoryTypes.ts
export type ProductStatus = "good" | "low" | "out";

export interface Product {
  id: string;
  name: string;
  description?: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  stockStatus: ProductStatus;
  status: string;
  lastUpdated: string;
}

export interface InventoryFilter {
  category?: string;
  status?: ProductStatus;
  search?: string;
  pageSize?: number;
}
