"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Email sent successfully!!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send email");
      }
    } catch (error) {
      setStatus("❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-30 justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20"
      >
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          Get in Touch ✨
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/90">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full p-4 rounded-xl border-0 shadow-inner bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-4 rounded-xl border-0 shadow-inner bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-2 w-full p-4 rounded-xl border-0 shadow-inner bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Write your thoughts..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            Send Message 🚀
          </motion.button>
        </form>

        {status && (
          <p className="text-center mt-6 text-sm text-white/90">{status}</p>
        )}
      </motion.div>
    </div>
  );
}
