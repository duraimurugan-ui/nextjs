"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">YourBrand</h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Building digital experiences that inspire and engage. 
            Let's create something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaFacebookF />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition">
              <FaTwitter />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
       <p>© 2025 YourBrand. All rights reserved. Don&apos;t copy this.</p>
      </div>
    </footer>
  );
}
