"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ShoppingCart,
    Plus,
    Minus,
    Trash2,
    MessageCircle,
    CheckCircle2,
    ArrowLeft,
    Send,
} from "lucide-react";
import Link from "next/link";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import products from "@/data/products.json";

interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export default function ReorderPage() {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [showProductSelector, setShowProductSelector] = useState(false);

    const addProduct = (productId: string) => {
        const product = products.find((p) => p.id === productId);
        if (!product) return;

        const existing = orderItems.find((i) => i.productId === productId);
        if (existing) {
            setOrderItems(
                orderItems.map((i) =>
                    i.productId === productId
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            );
        } else {
            setOrderItems([
                ...orderItems,
                {
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                },
            ]);
        }
        setShowProductSelector(false);
    };

    const updateQuantity = (productId: string, delta: number) => {
        setOrderItems(
            orderItems
                .map((i) =>
                    i.productId === productId
                        ? { ...i, quantity: Math.max(0, i.quantity + delta) }
                        : i
                )
                .filter((i) => i.quantity > 0)
        );
    };

    const removeItem = (productId: string) => {
        setOrderItems(orderItems.filter((i) => i.productId !== productId));
    };

    const total = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const whatsappMessage = `Hello Rapture Holdings, I would like to place a reorder:\n\n${orderItems
        .map(
            (item) =>
                `• ${item.name} × ${item.quantity} = ${formatPrice(
                    item.price * item.quantity
                )}`
        )
        .join("\n")}\n\nTotal: ${formatPrice(total)}\n\nPlease confirm availability and delivery timeline.`;

    if (submitted) {
        return (
            <>
                <section className="min-h-screen flex items-center justify-center bg-surface py-20">
                    <div className="max-w-md mx-auto px-4 text-center animate-slide-up">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-10 h-10 text-accent" />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
                            Order Submitted!
                        </h1>
                        <p className="text-muted mb-8">
                            Your order request has been received. Our team will confirm
                            availability and contact you shortly.
                        </p>
                        <div className="bg-white rounded-2xl border border-border p-6 mb-8 text-left">
                            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                                Order Summary
                            </h3>
                            {orderItems.map((item) => (
                                <div
                                    key={item.productId}
                                    className="flex justify-between text-sm py-2 border-b border-border last:border-0"
                                >
                                    <span className="text-slate-700">
                                        {item.name} × {item.quantity}
                                    </span>
                                    <span className="font-semibold">
                                        {formatPrice(item.price * item.quantity)}
                                    </span>
                                </div>
                            ))}
                            <div className="flex justify-between text-sm font-bold text-slate-900 pt-4 mt-2 border-t border-border">
                                <span>Total</span>
                                <span className="text-primary">{formatPrice(total)}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href={generateWhatsAppLink(whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:shadow-lg hover:shadow-green-500/30 transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Send via WhatsApp
                            </a>
                            <Link
                                href="/catalog"
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-primary border-2 border-primary/20 rounded-2xl hover:bg-primary hover:text-white transition-all"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/b2b-portal"
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portal
                    </Link>
                    <div className="flex items-center gap-3">
                        <ShoppingCart className="w-6 h-6 text-accent-light" />
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Reorder Supplies
                        </h1>
                    </div>
                    <p className="mt-2 text-white/70">
                        Select products, choose quantities, and submit your order.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-surface min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Order Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                                <div className="p-6 border-b border-border flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Order Items
                                    </h2>
                                    <button
                                        onClick={() => setShowProductSelector(!showProductSelector)}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent border border-accent/30 rounded-xl hover:bg-accent/5 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Product
                                    </button>
                                </div>

                                {/* Product Selector */}
                                {showProductSelector && (
                                    <div className="p-6 border-b border-border bg-slate-50">
                                        <h3 className="text-sm font-semibold text-slate-700 mb-4">
                                            Select a product to add:
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                                            {products.map((product) => (
                                                <button
                                                    key={product.id}
                                                    onClick={() => addProduct(product.id)}
                                                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border hover:border-accent hover:shadow-sm transition-all text-left"
                                                >
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-lg"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-semibold text-slate-900 truncate">
                                                            {product.name}
                                                        </div>
                                                        <div className="text-xs text-muted">
                                                            {formatPrice(product.price)}
                                                        </div>
                                                    </div>
                                                    <Plus className="w-4 h-4 text-accent shrink-0" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Items List */}
                                {orderItems.length === 0 ? (
                                    <div className="p-12 text-center">
                                        <ShoppingCart className="w-12 h-12 text-muted/30 mx-auto mb-4" />
                                        <h3 className="font-bold text-slate-900 mb-2">
                                            No items added yet
                                        </h3>
                                        <p className="text-sm text-muted mb-4">
                                            Click &quot;Add Product&quot; to start building your
                                            order.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-border">
                                        {orderItems.map((item) => (
                                            <div
                                                key={item.productId}
                                                className="p-6 flex items-center gap-4"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-xl"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-slate-900 truncate">
                                                        {item.name}
                                                    </h4>
                                                    <span className="text-sm text-muted">
                                                        {formatPrice(item.price)} each
                                                    </span>
                                                </div>
                                                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.productId, -1)
                                                        }
                                                        className="px-3 py-2 hover:bg-slate-50 transition-colors"
                                                        aria-label="Decrease"
                                                    >
                                                        <Minus className="w-3 h-3 text-slate-600" />
                                                    </button>
                                                    <span className="px-4 py-2 text-sm font-bold border-x border-border min-w-[48px] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.productId, 1)
                                                        }
                                                        className="px-3 py-2 hover:bg-slate-50 transition-colors"
                                                        aria-label="Increase"
                                                    >
                                                        <Plus className="w-3 h-3 text-slate-600" />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-primary min-w-[100px] text-right">
                                                    {formatPrice(item.price * item.quantity)}
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.productId)}
                                                    className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                                                    aria-label="Remove"
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-400" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
                                <h2 className="text-lg font-bold text-slate-900 mb-6">
                                    Order Summary
                                </h2>

                                {orderItems.length > 0 && (
                                    <>
                                        <div className="space-y-3 mb-6">
                                            {orderItems.map((item) => (
                                                <div
                                                    key={item.productId}
                                                    className="flex justify-between text-sm"
                                                >
                                                    <span className="text-muted truncate mr-2">
                                                        {item.name} × {item.quantity}
                                                    </span>
                                                    <span className="font-semibold text-slate-900 whitespace-nowrap">
                                                        {formatPrice(item.price * item.quantity)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t border-border pt-4 mb-6">
                                            <div className="flex justify-between">
                                                <span className="font-bold text-slate-900">
                                                    Total
                                                </span>
                                                <span className="text-xl font-extrabold text-primary">
                                                    {formatPrice(total)}
                                                </span>
                                            </div>
                                            <span className="text-xs text-muted">excl. VAT</span>
                                        </div>
                                    </>
                                )}

                                <div className="space-y-3">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={orderItems.length === 0}
                                        className="flex items-center justify-center gap-2 w-full px-4 py-4 text-sm font-bold text-white gradient-primary rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4" />
                                        Submit Order
                                    </button>
                                    <a
                                        href={
                                            orderItems.length > 0
                                                ? generateWhatsAppLink(whatsappMessage)
                                                : "#"
                                        }
                                        target={orderItems.length > 0 ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full px-4 py-4 text-sm font-bold rounded-xl transition-all duration-300 ${orderItems.length > 0
                                                ? "text-white bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/30"
                                                : "text-muted bg-slate-100 cursor-not-allowed"
                                            }`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Order via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
