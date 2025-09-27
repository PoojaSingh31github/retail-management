"use client";
import { ChevronRightIcon, } from "lucide-react";
import MetricsCard from "@/component/common/dashboard/MetricsCard";
import RevenueTrend from "@/component/common/dashboard/RevenueTrend";
import RecentOrders from "@/component/common/dashboard/RecentOrders";
import QuickActions from "@/component/common/dashboard/QuickActions";
import OrderStatusDistribution from "@/component/common/dashboard/OrderStatusDistribution";
import TopSellingProducts from "@/component/common/dashboard/TopSellingProducts";
import { metrics, orderStatuses, recentOrders, topSellingProducts, } from "./data/mockData";
import { Layout } from "@/component/layout/Main";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="mb-6 rounded-lg bg-[#194EDD] p-6  shadow-sm">
        <h2 className="text-2xl font-bold text-white pb-1">Welcome back, Pooja Singh!</h2>
        <p className="text-md text-gray-200">
          Here&apos;s what&apos;s happening with your business today.
        </p>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <RevenueTrend />
        </div>
        <div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Order Status Distribution</h2>
            <p className="text-sm text-gray-500">
              Current order status breakdown
            </p>
            <ul className="mt-4 space-y-3">
              {orderStatuses.map((status, index) => (
                <OrderStatusDistribution key={index} status={status} />
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
        <div className="rounded-lg bg-white p-6 shadow-sm col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <a
              href="#"
              className="flex items-center text-sm font-medium text-blue-600"
            >
              View All <ChevronRightIcon className="ml-1 h-4 w-4" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Latest orders from your customers
          </p>
          <div className="mt-4 space-y-4">
            {recentOrders.map((order, index) => (
              <RecentOrders key={index} order={order} />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <QuickActions />
        </div>
      </div>
      <div className="gap-6 mt-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Top Selling Products</h2>
          <p className="text-sm text-gray-500">
            Your best performing products this month
          </p>
          <div className="mt-4 space-y-4">
            {topSellingProducts.map((product, index) => (
              <TopSellingProducts key={index} product={product} />
            ))}
          </div>
        </div>
      </div>









      {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-blue-600"
              >
                View All <ChevronRightIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Latest orders from your customers
            </p>
            <div className="mt-4 space-y-4">
              {recentOrders.map((order, index) => (
                <RecentOrders key={index} order={order} />
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Top Selling Products</h2>
            <p className="text-sm text-gray-500">
              Your best performing products this month
            </p>
            <div className="mt-4 space-y-4">
              {topSellingProducts.map((product, index) => (
                <TopSellingProducts key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Order Status Distribution</h2>
            <p className="text-sm text-gray-500">
              Current order status breakdown
            </p>
            <ul className="mt-4 space-y-3">
              {orderStatuses.map((status, index) => (
                <OrderStatusDistribution key={index} status={status} />
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm col-end-3">
            <QuickActions />
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default DashboardPage;
