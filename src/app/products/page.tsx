"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  content: string;
  image: string | null;
  price: string;
  regular_price: string;
  sale_price: string;
  price_html: string;
  type: string;
}

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/myshop/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* ✨ Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Products</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Discover our latest collection — modern, stylish, and crafted with care.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ✨ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Image */}
            {p.image && (
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {p.title}
              </h3>

              {/* Price */}
              <div className="mb-4 text-lg font-semibold">
                {p.sale_price ? (
                  <>
                    <span className="line-through text-gray-400 mr-2">
                      ₹{p.regular_price}
                    </span>
                    <span className="text-red-600 text-xl">₹{p.sale_price}</span>
                  </>
                ) : p.type === "variable" ? (
                  <span
                    className="text-blue-600"
                    dangerouslySetInnerHTML={{ __html: p.price_html }}
                  />
                ) : (
                  <span className="text-blue-600">₹{p.price}</span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-gray-500 text-sm mb-5 line-clamp-3">
                {p.content}
              </p>

              {/* Button */}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
