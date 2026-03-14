"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "HP LaserJet Pro", price: 4500, stock: 12 },
    { id: "2", name: "Canon Ink Cartridge", price: 650, stock: 30 },
    { id: "3", name: "Brother Toner", price: 1200, stock: 18 },
  ]);

  const addProduct = () => {
    const newId = String(products.length + 1);

    setProducts((prev) => [
      ...prev,
      {
        id: newId,
        name: "New Product",
        price: 1000,
        stock: 5,
      },
    ]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Products</h1>

      <button
        onClick={addProduct}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Add Product
      </button>

      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Stock</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3">{product.name}</td>
                <td className="p-3">R {product.price}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}