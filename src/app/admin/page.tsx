"use client";

import {
    Package,
    ShoppingCart,
    Users,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import orders from "@/data/admin-orders.json";

const revenueData = [
    { month: "Sep", revenue: 42000 },
    { month: "Oct", revenue: 58000 },
    { month: "Nov", revenue: 51000 },
    { month: "Dec", revenue: 74000 },
    { month: "Jan", revenue: 62000 },
    { month: "Feb", revenue: 81000 },
    { month: "Mar", revenue: 101598 },
];

const stats = [
    {
        label: "Total Products",
        value: "12",
        change: "+2 this month",
        trend: "up",
        icon: Package,
        color: "bg-blue-500",
    },
    {
        label: "Orders Today",
        value: orders.filter((o) => o.date === "2025-03-10").length.toString(),
        change: "+3 pending",
        trend: "up",
        icon: ShoppingCart,
        color: "bg-accent",
    },
    {
        label: "Corporate Clients",
        value: "8",
        change: "+1 new client",
        trend: "up",
        icon: Users,
        color: "bg-purple-500",
    },
    {
        label: "Monthly Revenue",
        value: "R 101,598",
        change: "+25.4%",
        trend: "up",
        icon: TrendingUp,
        color: "bg-amber-500",
    },
];

const recentOrders = orders.slice(0, 5);

export default function AdminDashboard() {
    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Welcome back. Here&apos;s what&apos;s happening with your business today.
                </p>
            </div>

            {/* Stat Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}
                                    style={{
                                        boxShadow: `0 8px 16px -4px ${stat.color === "bg-accent"
                                                ? "rgba(22,163,74,0.3)"
                                                : stat.color === "bg-blue-500"
                                                    ? "rgba(59,130,246,0.3)"
                                                    : stat.color === "bg-purple-500"
                                                        ? "rgba(168,85,247,0.3)"
                                                        : "rgba(245,158,11,0.3)"
                                            }`,
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <span
                                    className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === "up" ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {stat.trend === "up" ? (
                                        <ArrowUpRight className="w-3 h-3" />
                                    ) : (
                                        <ArrowDownRight className="w-3 h-3" />
                                    )}
                                    {stat.change}
                                </span>
                            </div>
                            <div className="text-2xl font-extrabold text-slate-900">
                                {stat.value}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Chart + Recent Orders */}
            <div className="grid lg:grid-cols-5 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">
                                Revenue Overview
                            </h2>
                            <p className="text-xs text-slate-500">
                                Monthly revenue (Sep 2024 – Mar 2025)
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg">
                            <ArrowUpRight className="w-3 h-3" />
                            +25.4% vs last month
                        </div>
                    </div>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient
                                        id="revenueGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="month"
                                    tick={{ fontSize: 12, fill: "#94a3b8" }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fontSize: 12, fill: "#94a3b8" }}
                                    axisLine={false}
                                    tickLine={false}
                                    tickFormatter={(v) => `R${v / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "12px",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                    }}
 formatter={(value) => `R ${Number(value).toLocaleString()}`}

               

                                    
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#16A34A"
                                    strokeWidth={3}
                                    fill="url(#revenueGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6">
                        Recent Orders
                    </h2>
                    <div className="space-y-4">
                        {recentOrders.map((order) => (
                            <div
                                key={order.id}
                                className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-900 line-clamp-1">
                                            {order.clientName}
                                        </div>
                                        <div className="text-[11px] text-slate-500">
                                            {order.id}
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${order.status === "Completed"
                                            ? "bg-green-50 text-green-700"
                                            : order.status === "Processing"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-amber-50 text-amber-700"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
