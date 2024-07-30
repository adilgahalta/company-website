"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Products: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-[#FFC001]">
      <h1 className="text-3xl text-center px-5">Our Products</h1>
      {loading && (
        <p className="content-center text-center h-screen text-7xl ">
          Loading...
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4  shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 text-lg font-semibold text-center">
              IDR. {product.price.toLocaleString("id-ID")}
            </p>
            <button></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
