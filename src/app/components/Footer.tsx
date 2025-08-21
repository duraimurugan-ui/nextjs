"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-center space-y-6">
      {/* Links */}
      <div className="space-x-6">
        <Link href="#" className="hover:text-blue-400">About</Link>
        <Link href="#" className="hover:text-blue-400">Contact</Link>
        <Link href="#" className="hover:text-blue-400">Support</Link>
      </div>

      {/* Social Icons (optional) */}
      <div className="flex justify-center space-x-6">
        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
        <Link href="#"><i className="fab fa-instagram"></i></Link>
        <Link href="#"><i className="fab fa-twitter"></i></Link>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © 2025 YourBrand. All rights reserved.
      </p>
    </footer>
  );
}
