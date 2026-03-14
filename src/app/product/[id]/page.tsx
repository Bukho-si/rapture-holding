"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ShoppingCart,
    MessageCircle,
    Minus,
    Plus,
    CheckCircle2,
    Package,
    Truck,
    Shield,
} from "lucide-react";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import products from "@/data/products.json";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const product = products.find((p) => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const [addedToOrder, setAddedToOrder] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">
                        Product Not Found
                    </h1>
                    <Link
                        href="/catalog"
                        className="text-accent font-semibold hover:underline"
                    >
                        ← Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleAddToOrder = () => {
        setAddedToOrder(true);
        setTimeout(() => setAddedToOrder(false), 3000);
    };

    const whatsappMessage = `Hello Rapture Holdings, I would like to order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nTotal: ${formatPrice(product.price * quantity)}\n\nPlease confirm availability and delivery timeline.`;

    return (
        <>
            <section className="py-12 bg-surface min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <Link
                        href="/catalog"
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Catalog
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="bg-white rounded-2xl border border-border p-8 flex items-center justify-center min-h-[400px]">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={280}
                                height={280}
                                className="max-w-full"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                                {product.category}
                            </span>
                            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-muted leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="text-3xl font-extrabold text-primary mb-8">
                                {formatPrice(product.price)}
                                <span className="text-sm text-muted font-normal ml-2">
                                    excl. VAT
                                </span>
                            </div>

                            {/* Quantity selector */}
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-sm font-semibold text-slate-700">
                                    Quantity:
                                </span>
                                <div className="flex items-center bg-white border border-border rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-3 hover:bg-slate-50 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="w-4 h-4 text-slate-600" />
                                    </button>
                                    <span className="px-6 py-3 text-sm font-bold text-slate-900 border-x border-border min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-3 hover:bg-slate-50 transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="w-4 h-4 text-slate-600" />
                                    </button>
                                </div>
                                <span className="text-sm text-muted">
                                    Total:{" "}
                                    <span className="font-bold text-primary">
                                        {formatPrice(product.price * quantity)}
                                    </span>
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <button
                                    onClick={handleAddToOrder}
                                    className={`flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${addedToOrder
                                            ? "bg-accent text-white shadow-lg shadow-accent/30"
                                            : "gradient-primary text-white hover:shadow-xl hover:shadow-primary/20"
                                        }`}
                                >
                                    {addedToOrder ? (
                                        <>
                                            <CheckCircle2 className="w-4 h-4" />
                                            Added to Order!
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-4 h-4" />
                                            Add to Order
                                        </>
                                    )}
                                </button>
                                <a
                                    href={generateWhatsAppLink(whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Order via WhatsApp
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { icon: Package, label: "In Stock" },
                                    { icon: Truck, label: "Next-Day Delivery" },
                                    { icon: Shield, label: "Quality Guaranteed" },
                                ].map((badge) => {
                                    const Icon = badge.icon;
                                    return (
                                        <div
                                            key={badge.label}
                                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-border text-center"
                                        >
                                            <Icon className="w-5 h-5 text-accent" />
                                            <span className="text-[11px] font-medium text-muted">
                                                {badge.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
                                Related Products
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map((rp) => (
                                    <Link
                                        key={rp.id}
                                        href={`/product/${rp.id}`}
                                        className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="bg-slate-50 p-6 flex items-center justify-center h-40">
                                            <Image
                                                src={rp.image}
                                                alt={rp.name}
                                                width={100}
                                                height={100}
                                                className="group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-slate-900 group-hover:text-accent transition-colors">
                                                {rp.name}
                                            </h3>
                                            <span className="text-lg font-extrabold text-primary mt-2 block">
                                                {formatPrice(rp.price)}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
