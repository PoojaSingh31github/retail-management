"use client";

import DeliveryAgents from "@/component/common/delivery/DeliveryAgents";
import DeliveryMetrics from "@/component/common/delivery/DeliveryMetrics";
import OrdersNeedingAssignment from "@/component/common/delivery/OrdersNeedingAssignment";
import OrdersOutForDelivery from "@/component/common/delivery/OrdersOutForDelivery";
import { ordersOutForDelivery } from "./data/deliveryMockData";
import { Layout } from "@/component/layout/Main";

const DeliveryPage = () => {
    return (
        <Layout>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Delivery Management</h1>
                    <p className="text-gray-500">Manage delivery assignments and track orders</p>
                </div>
                <DeliveryMetrics />
                <DeliveryAgents />
                <OrdersNeedingAssignment />
                <OrdersOutForDelivery orders={ordersOutForDelivery} />
            </div>
        </Layout>
    );
};

export default DeliveryPage;