"use client";

import Link from "next/link";
import Image from "next/image";
import {
    LayoutDashboard,
    Clock,
    RefreshCcw,
    Heart,
    Package,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Loader2,
    ShoppingCart,
    User,
    Building2,
    Mail,
    Phone,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import products from "@/data/products.json";
import mockClient from "@/data/mock-client.json";

const statusStyles: Record<string, string> = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-amber-100 text-amber-700",
    Cancelled: "bg-red-100 text-red-700",
};

const statusIcons: Record<string, React.ElementType> = {
    Delivered: CheckCircle2,
    Processing: Loader2,
    Cancelled: AlertCircle,
};

export default function B2BPortalPage() {
    const savedProducts = products.filter((p) =>
        mockClient.savedProducts.includes(p.id)
    );

    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <LayoutDashboard className="w-6 h-6 text-accent-light" />
                                <span className="text-xs font-semibold text-accent-light uppercase tracking-widest">
                                    B2B Client Portal
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                                Corporate Dashboard
                            </h1>
                            <p className="mt-2 text-white/70">
                                Welcome back,{" "}
                                <span className="text-white font-semibold">
                                    {mockClient.clientInfo.contactPerson}
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/reorder"
                                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white gradient-accent rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Create New Order
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-surface min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Client Info Card */}
                    <div className="bg-white rounded-2xl border border-border p-6 mb-8">
                        <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                            Account Information
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted">Company</div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {mockClient.clientInfo.companyName}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted">Contact</div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {mockClient.clientInfo.contactPerson}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted">Email</div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {mockClient.clientInfo.email}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted">Account No.</div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {mockClient.clientInfo.accountNumber}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Recent Orders */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                                <div className="p-6 border-b border-border flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <h2 className="text-lg font-bold text-slate-900">
                                            Recent Orders
                                        </h2>
                                    </div>
                                </div>

                                <div className="divide-y divide-border">
                                    {mockClient.orders.map((order) => {
                                        const StatusIcon =
                                            statusIcons[order.status] || AlertCircle;
                                        return (
                                            <div key={order.id} className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div>
                                                        <span className="text-sm font-bold text-slate-900">
                                                            {order.id}
                                                        </span>
                                                        <span className="text-xs text-muted ml-3">
                                                            {new Date(order.date).toLocaleDateString(
                                                                "en-ZA",
                                                                {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                }
                                                            )}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${statusStyles[order.status]
                                                            }`}
                                                    >
                                                        <StatusIcon className="w-3 h-3" />
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <div className="space-y-2 mb-4">
                                                    {order.items.map((item) => (
                                                        <div
                                                            key={item.productId}
                                                            className="flex items-center justify-between text-sm"
                                                        >
                                                            <span className="text-slate-700">
                                                                {item.name}{" "}
                                                                <span className="text-muted">
                                                                    × {item.quantity}
                                                                </span>
                                                            </span>
                                                            <span className="font-semibold text-slate-900">
                                                                {formatPrice(item.price * item.quantity)}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between pt-3 border-t border-border">
                                                    <span className="text-sm font-bold text-slate-900">
                                                        Total: {formatPrice(order.total)}
                                                    </span>
                                                    <Link
                                                        href="/reorder"
                                                        className="text-xs font-semibold text-accent flex items-center gap-1 hover:gap-2 transition-all"
                                                    >
                                                        <RefreshCcw className="w-3 h-3" />
                                                        Reorder
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Quick Reorder */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <RefreshCcw className="w-5 h-5 text-accent" />
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Quick Reorder
                                    </h2>
                                </div>
                                <p className="text-sm text-muted mb-6">
                                    Instantly reorder your most recent supplies with one click.
                                </p>
                                <Link
                                    href="/reorder"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-white gradient-primary rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                                >
                                    Reorder Previous Items
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Saved Products */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Heart className="w-5 h-5 text-red-500" />
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Saved Products
                                    </h2>
                                </div>
                                <div className="space-y-3">
                                    {savedProducts.map((sp) => (
                                        <Link
                                            key={sp.id}
                                            href={`/product/${sp.id}`}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                        >
                                            <Image
                                                src={sp.image}
                                                alt={sp.name}
                                                width={40}
                                                height={40}
                                                className="rounded-lg"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-slate-900 truncate group-hover:text-accent transition-colors">
                                                    {sp.name}
                                                </div>
                                                <div className="text-xs text-muted">
                                                    {formatPrice(sp.price)}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Bulk Order */}
                            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white">
                                <Package className="w-8 h-8 text-accent-light mb-4" />
                                <h3 className="text-lg font-bold mb-2">Bulk Order?</h3>
                                <p className="text-sm text-white/70 mb-6">
                                    For orders over 50 items, contact us for special corporate
                                    pricing.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    Submit Bulk Order
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
