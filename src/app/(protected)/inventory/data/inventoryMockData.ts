// data/inventoryMockData.ts
export type ProductStatus = 'good' | 'low' | 'out';

export interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  stockStatus: ProductStatus;
  status: 'Active' | 'Inactive';
  lastUpdated: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Coffee Beans",
    description: "High-quality arabica coffee beans",
    sku: "COF-001",
    category: "Beverages",
    price: 24.99,
    stock: 45,
    stockStatus: 'good',
    status: "Active",
    lastUpdated: "Sep 26, 2025",
  },
  {
    id: 2,
    name: "Organic Green Tea",
    description: "Premium organic green tea leaves",
    sku: "TEA-002",
    category: "Beverages",
    price: 18.50,
    stock: 5,
    stockStatus: 'low',
    status: "Active",
    lastUpdated: "Sep 26, 2025",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones",
    sku: "ELC-003",
    category: "Electronics",
    price: 199.99,
    stock: 12,
    stockStatus: 'good',
    status: "Active",
    lastUpdated: "Sep 26, 2025",
  },
];