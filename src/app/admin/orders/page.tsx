"use client";

import { useState } from "react";
import { Eye, RefreshCw, Search } from "lucide-react";
import initialOrders from "@/data/admin-orders.json";
import { formatPrice } from "@/lib/utils";

export default function AdminOrders() {
    const [orders, setOrders] = useState(initialOrders);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [viewOrder, setViewOrder] = useState<(typeof initialOrders)[0] | null>(
        null
    );

    const filtered = orders.filter((o) => {
        const matchSearch =
            o.clientName.toLowerCase().includes(search.toLowerCase()) ||
            o.id.toLowerCase().includes(search.toLowerCase()) ||
            o.product.toLowerCase().includes(search.toLowerCase());
        const matchStatus =
            filterStatus === "All" || o.status === filterStatus;
        return matchSearch && matchStatus;
    });

    const updateStatus = (
        orderId: string,
        newStatus: "Pending" | "Processing" | "Completed"
    ) => {
        setOrders((prev) =>
            prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
        );
        if (viewOrder && viewOrder.id === orderId) {
            setViewOrder({ ...viewOrder, status: newStatus });
        }
    };

    const statusColors: Record<string, string> = {
        Pending: "bg-amber-50 text-amber-700",
        Processing: "bg-blue-50 text-blue-700",
        Completed: "bg-green-50 text-green-700",
    };

    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-extrabold text-slate-900">Orders</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Track and manage customer orders
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="relative flex-1 min-w-[240px] max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                </div>
                <div className="flex gap-2">
                    {["All", "Pending", "Processing", "Completed"].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${filterStatus === status
                                    ? "bg-accent text-white shadow-md shadow-accent/30"
                                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Order ID
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Client
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Product
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Qty
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Total
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Date
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Status
                                </th>
                                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                                >
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-semibold text-slate-900">
                                            {order.clientName}
                                        </div>
                                        <div className="text-[11px] text-slate-500">
                                            {order.contactPerson}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-700 max-w-[200px] truncate">
                                        {order.product}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                        {order.quantity}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                        {formatPrice(order.total)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {order.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${statusColors[order.status]
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => setViewOrder(order)}
                                                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                title="View Order"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const next =
                                                        order.status === "Pending"
                                                            ? "Processing"
                                                            : order.status === "Processing"
                                                                ? "Completed"
                                                                : "Pending";
                                                    updateStatus(
                                                        order.id,
                                                        next as "Pending" | "Processing" | "Completed"
                                                    );
                                                }}
                                                className="p-2 rounded-lg text-slate-400 hover:text-green-600 hover:bg-green-50 transition-colors"
                                                title="Update Status"
                                            >
                                                <RefreshCw className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                    Showing {filtered.length} of {orders.length} orders
                </div>
            </div>

            {/* View Order Modal */}
            {viewOrder && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setViewOrder(null)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-slide-up">
                        <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                            Order Details
                        </h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Order ID</span>
                                <span className="font-bold">{viewOrder.id}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Client</span>
                                <span className="font-semibold">{viewOrder.clientName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Contact</span>
                                <span>{viewOrder.contactPerson}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Product</span>
                                <span className="text-right max-w-[200px]">{viewOrder.product}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Quantity</span>
                                <span className="font-semibold">{viewOrder.quantity}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Total</span>
                                <span className="font-bold text-accent">
                                    {formatPrice(viewOrder.total)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500">Status</span>
                                <select
                                    value={viewOrder.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            viewOrder.id,
                                            e.target.value as "Pending" | "Processing" | "Completed"
                                        )
                                    }
                                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-accent/30"
                                >
                                    <option>Pending</option>
                                    <option>Processing</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={() => setViewOrder(null)}
                            className="mt-6 w-full px-5 py-3 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
