"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Pencil, Trash2, X, Search } from "lucide-react";
import initialProducts from "@/data/products.json";
import { formatPrice } from "@/lib/utils";

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
    featured: boolean;
    stock?: number;
}

const defaultForm = {
    name: "",
    category: "Printers",
    description: "",
    price: 0,
    stock: 0,
    image: "/products/printer.svg",
};

export default function AdminProducts() {
    const [products, setProducts] = useState<Product[]>(
        initialProducts.map((p) => ({ ...p, stock: Math.floor(Math.random() * 50) + 5 }))
    );
    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [form, setForm] = useState(defaultForm);

    const filtered = products.filter(
        (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.category.toLowerCase().includes(search.toLowerCase())
    );

    const openAddModal = () => {
        setEditingId(null);
        setForm(defaultForm);
        setModalOpen(true);
    };

    const openEditModal = (product: Product) => {
        setEditingId(product.id);
        setForm({
            name: product.name,
            category: product.category,
            description: product.description,
            price: product.price,
            stock: product.stock ?? 0,
            image: product.image,
        });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (editingId !== null) {
            setProducts((prev) =>
                prev.map((p) =>
                    p.id === editingId
                        ? { ...p, ...form, price: Number(form.price), stock: Number(form.stock) }
                        : p
                )
            );
        } else {
            const newId = Math.max(...products.map((p) => p.id)) + 1;
            setProducts((prev) => [
                ...prev,
                {
                    id: newId,
                    ...form,
                    price: Number(form.price),
                    stock: Number(form.stock),
                    featured: false,
                },
            ]);
        }
        setModalOpen(false);
    };

    const handleDelete = (id: number) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">Products</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage your product catalog
                    </p>
                </div>
                <button
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Plus className="w-4 h-4" />
                    Add Product
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-6 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Product
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Category
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Price
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Stock
                                </th>
                                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900 line-clamp-1">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                        {formatPrice(product.price)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${(product.stock ?? 0) > 20
                                                    ? "bg-green-50 text-green-700"
                                                    : (product.stock ?? 0) > 5
                                                        ? "bg-amber-50 text-amber-700"
                                                        : "bg-red-50 text-red-700"
                                                }`}
                                        >
                                            {product.stock ?? 0} units
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openEditModal(product)}
                                                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                    Showing {filtered.length} of {products.length} products
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setModalOpen(false)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-slide-up">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-400" />
                        </button>
                        <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                            {editingId ? "Edit Product" : "Add Product"}
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="HP LaserJet Pro"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Category
                                    </label>
                                    <select
                                        value={form.category}
                                        onChange={(e) =>
                                            setForm({ ...form, category: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    >
                                        <option>Printers</option>
                                        <option>Ink Cartridges</option>
                                        <option>Toners</option>
                                        <option>Office Supplies</option>
                                        <option>Cleaning Materials</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Price (ZAR)
                                    </label>
                                    <input
                                        type="number"
                                        value={form.price}
                                        onChange={(e) =>
                                            setForm({ ...form, price: Number(e.target.value) })
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({ ...form, description: e.target.value })
                                    }
                                    rows={3}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                                    placeholder="Product description..."
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        value={form.stock}
                                        onChange={(e) =>
                                            setForm({ ...form, stock: Number(e.target.value) })
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        value={form.image}
                                        onChange={(e) =>
                                            setForm({ ...form, image: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                                        placeholder="/products/printer.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-5 py-2.5 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 shadow-lg shadow-accent/20 transition-all"
                            >
                                {editingId ? "Save Changes" : "Add Product"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
