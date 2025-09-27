"use client";
import OrderFilters from "@/component/common/orders/OrderFilters";
import OrderMetrics from "@/component/common/orders/OrderMetrics";
import OrdersTable from "@/component/common/orders/OrdersTable";
import { orders } from "./data/ordersMockData";
import { Layout } from "@/component/layout/Main";

const OrdersPage = () => {
    return (
        <Layout>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
                    <p className="text-gray-500">View and manage customer orders</p>
                </div>
                <OrderMetrics />
                <OrderFilters />
                <OrdersTable orders={orders} />
            </div>
        </Layout>
    );
};

export default OrdersPage;