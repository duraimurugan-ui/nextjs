"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User } from "lucide-react"; // icon pack
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/"><Image
    src="/logo.jpg"   // ✅ path from public folder
    alt="YourBrand Logo"
    width={150}       // adjust size
    height={40}
    className="object-contain"
  /></a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/products" className="hover:text-blue-600">Shop</a>
          <a href="#" className="hover:text-blue-600">Categories</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Right Side (icons) */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Sign In
          </button>
          <ShoppingCart className="w-6 h-6 cursor-pointer text-gray-700 hover:text-blue-600" />
          <User className="w-6 h-6 cursor-pointer text-gray-700 hover:text-blue-600" />

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-inner overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
              <Link href="/">Home</Link>
              <Link href="#" className="hover:text-blue-600">Shop</Link>
              <Link href="#" className="hover:text-blue-600">Categories</Link>
              <Link href="#" className="hover:text-blue-600">Contact</Link>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Sign In
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}