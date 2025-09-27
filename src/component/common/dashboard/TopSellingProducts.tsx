import { Product } from "@/features/auth/types/dashboard.types";
import { BoxIcon } from "lucide-react";

interface Props {
  product: Product;
}

const TopSellingProducts: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
      <div className="flex items-center">
        <BoxIcon className="h-6 w-6 text-gray-400" />
        <div className="ml-4">
          <h4 className="font-medium">{product.name}</h4>
          <p className="text-xs text-gray-500">{product.id}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">{product.sales}</span>
        <span className="font-semibold">{product.price}</span>
      </div>
    </div>
  );
};

export default TopSellingProducts;
