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

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/myshop/v1/products-trending")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Trending <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Check out our hottest picks, updated daily.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                {p.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {p.title}
                  </h3>

                  {/* Price Handling */}
                  <div className="text-lg font-semibold text-blue-600">
                    {p.sale_price ? (
                      <>
                        <span className="line-through text-gray-500 mr-2">
                          ₹{p.regular_price}
                        </span>
                        <span className="text-red-600">₹{p.sale_price}</span>
                      </>
                    ) : p.type === "variable" ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: p.price_html }}
                      />
                    ) : (
                      <span>₹{p.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
}
