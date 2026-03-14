"use client";

import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import initialClients from "@/data/admin-clients.json";

export default function AdminClients() {
    const [search, setSearch] = useState("");
    const clients = initialClients;

    const filtered = clients.filter(
        (c) =>
            c.companyName.toLowerCase().includes(search.toLowerCase()) ||
            c.contactPerson.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    const statusColors: Record<string, string> = {
        Active: "bg-green-50 text-green-700",
        New: "bg-blue-50 text-blue-700",
        Inactive: "bg-slate-100 text-slate-500",
    };

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">Clients</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage your corporate client accounts
                    </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5">
                    <UserPlus className="w-4 h-4" />
                    Add Client
                </button>
            </div>

            <div className="relative mb-6 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Company
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Contact Person
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Email
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Phone
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Orders
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Last Order
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((client) => (
                                <tr
                                    key={client.id}
                                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                                {client.companyName
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .slice(0, 2)
                                                    .join("")}
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">
                                                {client.companyName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-700">
                                        {client.contactPerson}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {client.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {client.phone}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                        {client.totalOrders}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {client.lastOrder}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${statusColors[client.status]
                                                }`}
                                        >
                                            {client.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                    Showing {filtered.length} of {clients.length} clients
                </div>
            </div>
        </>
    );
}
