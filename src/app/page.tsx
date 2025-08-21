// app/page.tsx
"use client";
import { motion } from "framer-motion";
import TrendingProducts from "./components/TrendingProducts";
import TunnelSlider from "./components/TunnelSlider";


export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
     
      <TunnelSlider />


      <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-semibold mb-8 text-center">
    Shop by Category
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Apparel */}
    <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" alt="Apparel" className="w-full h-60 object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-semibold">Apparel</div>
    </motion.div>

    {/* Home Decor */}
    <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" alt="Home Decor" className="w-full h-60 object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-semibold">Home Decor</div>
    </motion.div>

    {/* Accessories */}
    <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg" alt="Accessories" className="w-full h-60 object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-semibold">Accessories</div>
    </motion.div>
  </div>
</section>

{/* 🔥 Trending Products Section */}
<TrendingProducts />

      {/* Featured Collection */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-4xl font-bold">New Summer Collection</h2>
          <p className="text-lg text-gray-600">
            Experience comfort and elegance with our latest arrivals. Designed
            for style and crafted for quality.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {["Alice", "Brian", "Sophia"].map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-center space-y-4"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-gray-600 italic">
                “Amazing quality and fast delivery. Highly recommended!”
              </p>
              <h4 className="font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 mb-16 mt-16 bg-gradient-to-br from-[#b8c6db] via-[#f5f7fa] to-[#fbc2eb] text-gray-900 text-center px-8 rounded-3xl shadow-2xl backdrop-blur-2xl ring-1 ring-gray-200/60 max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-5 tracking-tight drop-shadow-sm">Stay in the Loop</h2>
      <p className="mb-10 text-xl opacity-90">
        Get <span className="font-bold bg-orange-100 px-3 rounded text-pink-500">10% off</span> your first order when you subscribe.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-5 rounded-lg sm:rounded-l-lg text-gray-800 bg-white/90 shadow focus:outline-none focus:ring-2 focus:ring-pink-400 text-base transition duration-200"
        />
        <button
          type="submit"
          className="px-10 py-5 bg-gradient-to-r from-[#f857a6] to-[#ff5858] text-white font-bold rounded-lg sm:rounded-r-lg shadow hover:scale-105 hover:shadow-xl transition duration-200 text-base"
        >
          Subscribe
        </button>
      </form>
    </section>


      {/* Footer */}
    </div>
  );
}
