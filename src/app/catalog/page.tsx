"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ArrowRight, Grid3X3, List } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import products from "@/data/products.json";

const categories = [
    "All",
    "Printers",
    "Ink Cartridges",
    "Toners",
    "Office Supplies",
    "Cleaning Materials",
];

export default function CatalogPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchesSearch =
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory =
                category === "All" || p.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-semibold text-accent-light uppercase tracking-widest">
                        Product Catalog
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
                        Browse Our Products
                    </h1>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto">
                        Quality office supplies at competitive prices for your business.
                    </p>
                </div>
            </section>

            {/* Filters & Products */}
            <section className="py-12 bg-surface min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                            <input
                                id="catalog-search"
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            />
                        </div>

                        {/* View toggle */}
                        <div className="flex gap-1 bg-white border border-border rounded-xl p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2.5 rounded-lg transition-colors ${viewMode === "grid"
                                        ? "bg-primary text-white"
                                        : "text-muted hover:text-slate-700"
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2.5 rounded-lg transition-colors ${viewMode === "list"
                                        ? "bg-primary text-white"
                                        : "text-muted hover:text-slate-700"
                                    }`}
                                aria-label="List view"
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        <Filter className="w-4 h-4 text-muted mt-2" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${category === cat
                                        ? "gradient-accent text-white shadow-lg shadow-accent/20"
                                        : "bg-white border border-border text-slate-600 hover:border-accent hover:text-accent"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <p className="text-sm text-muted mb-6">
                        Showing <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
                        {filtered.length === 1 ? "product" : "products"}
                        {category !== "All" && (
                            <span>
                                {" "}
                                in <span className="font-semibold text-accent">{category}</span>
                            </span>
                        )}
                    </p>

                    {/* Products Grid */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <Search className="w-12 h-12 text-muted/30 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                No products found
                            </h3>
                            <p className="text-sm text-muted">
                                Try adjusting your search or filter criteria.
                            </p>
                        </div>
                    ) : viewMode === "grid" ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative bg-slate-50 p-6 flex items-center justify-center h-48">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={120}
                                            height={120}
                                            className="group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <span className="absolute top-3 left-3 text-[10px] font-semibold text-muted bg-white px-2.5 py-1 rounded-lg shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-muted mb-3 line-clamp-2">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-extrabold text-primary">
                                                {formatPrice(product.price)}
                                            </span>
                                            <span className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                                                View Details
                                                <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filtered.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="group flex bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                                >
                                    <div className="bg-slate-50 p-4 flex items-center justify-center w-32 sm:w-40 shrink-0">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={80}
                                            height={80}
                                            className="group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-semibold text-muted bg-slate-100 px-2 py-0.5 rounded">
                                                {product.category}
                                            </span>
                                            <h3 className="font-bold text-slate-900 mt-1 group-hover:text-accent transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-muted mt-1 line-clamp-1">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-extrabold text-primary whitespace-nowrap">
                                                {formatPrice(product.price)}
                                            </span>
                                            <span className="text-xs font-semibold text-accent flex items-center gap-1 whitespace-nowrap">
                                                View <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
