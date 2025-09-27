"use client";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
            <Sidebar />
            <div className="flex flex-1 flex-col ml-64">
                <Header />
                <main className="flex-1 p-6 pt-20"> 
                    {children}
                </main>
            </div>
        </div>
    );
};