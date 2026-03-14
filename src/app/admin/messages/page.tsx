"use client";

import { useState } from "react";
import { Mail, MailOpen, Search } from "lucide-react";
import initialMessages from "@/data/admin-messages.json";

export default function AdminMessages() {
    const [messages, setMessages] = useState(initialMessages);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [selected, setSelected] = useState<(typeof initialMessages)[0] | null>(
        null
    );

    const filtered = messages.filter((m) => {
        const matchSearch =
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.company.toLowerCase().includes(search.toLowerCase()) ||
            m.message.toLowerCase().includes(search.toLowerCase());
        const matchType = filterType === "All" || m.type === filterType;
        return matchSearch && matchType;
    });

    const unreadCount = messages.filter((m) => !m.read).length;

    const markRead = (id: number) => {
        setMessages((prev) =>
            prev.map((m) => (m.id === id ? { ...m, read: true } : m))
        );
    };

    const typeColors: Record<string, string> = {
        "Contact Form": "bg-slate-100 text-slate-600",
        "Quote Request": "bg-purple-50 text-purple-700",
        "Order Request": "bg-accent/10 text-green-700",
    };

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">Messages</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="relative flex-1 min-w-[240px] max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                </div>
                <div className="flex gap-2">
                    {["All", "Contact Form", "Quote Request", "Order Request"].map(
                        (type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${filterType === type
                                        ? "bg-accent text-white shadow-md shadow-accent/30"
                                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                    }`}
                            >
                                {type}
                            </button>
                        )
                    )}
                </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
                {/* Messages List */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="divide-y divide-slate-100">
                        {filtered.map((msg) => (
                            <button
                                key={msg.id}
                                onClick={() => {
                                    setSelected(msg);
                                    markRead(msg.id);
                                }}
                                className={`w-full text-left px-6 py-4 hover:bg-slate-50 transition-colors ${selected?.id === msg.id ? "bg-accent/5" : ""
                                    } ${!msg.read ? "bg-blue-50/40" : ""}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">
                                        {msg.read ? (
                                            <MailOpen className="w-4 h-4 text-slate-400" />
                                        ) : (
                                            <Mail className="w-4 h-4 text-blue-500" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <span
                                                className={`text-sm ${!msg.read ? "font-bold text-slate-900" : "font-semibold text-slate-700"
                                                    }`}
                                            >
                                                {msg.name}
                                            </span>
                                            <span className="text-[11px] text-slate-400 shrink-0">
                                                {msg.date}
                                            </span>
                                        </div>
                                        <div className="text-xs text-slate-500">{msg.company}</div>
                                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                            {msg.message}
                                        </p>
                                    </div>
                                    <span
                                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 ${typeColors[msg.type]
                                            }`}
                                    >
                                        {msg.type}
                                    </span>
                                </div>
                            </button>
                        ))}
                        {filtered.length === 0 && (
                            <div className="px-6 py-12 text-center text-sm text-slate-400">
                                No messages found
                            </div>
                        )}
                    </div>
                </div>

                {/* Message Detail */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
                    {selected ? (
                        <div className="animate-slide-up">
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${typeColors[selected.type]
                                        }`}
                                >
                                    {selected.type}
                                </span>
                                <span className="text-xs text-slate-400">{selected.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                {selected.name}
                            </h3>
                            <p className="text-sm text-slate-500 mb-1">{selected.company}</p>
                            <a
                                href={`mailto:${selected.email}`}
                                className="text-xs text-accent hover:underline"
                            >
                                {selected.email}
                            </a>
                            <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    {selected.message}
                                </p>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a
                                    href={`mailto:${selected.email}`}
                                    className="flex-1 text-center px-4 py-2.5 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 transition-colors"
                                >
                                    Reply
                                </a>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <Mail className="w-12 h-12 text-slate-200 mb-4" />
                            <p className="text-sm text-slate-400">
                                Select a message to view details
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
